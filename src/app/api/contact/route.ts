import { NextResponse } from 'next/server';

// In-memory rate limiting (Note: Reset on server restart/redeploy)
const ipCache = new Map<string, { count: number, lastRequest: number }>();

export async function POST(request: Request) {
    try {
        const ip = request.headers.get("x-forwarded-for") ?? "127.0.0.1";
        const now = Date.now();
        const userData = ipCache.get(ip) || { count: 0, lastRequest: 0 };

        // Rate Limit Check: Max 2 requests per minute
        if (userData.count >= 2 && (now - userData.lastRequest) < 60000) {
            return NextResponse.json(
                { error: "Bạn đã gửi quá nhiều yêu cầu. Vui lòng thử lại sau 1 phút." },
                { status: 429 }
            );
        }

        // Update Cache
        ipCache.set(ip, { count: userData.count + 1, lastRequest: now });

        const body = await request.json();

        // 2. Proxy to Google Script
        const response = await fetch(process.env.GOOGLE_SCRIPT_URL!, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),
        });

        if (!response.ok) {
            throw new Error('Failed to submit to Google Script');
        }

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('Contact API Error:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
