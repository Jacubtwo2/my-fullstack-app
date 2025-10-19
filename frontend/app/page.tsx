'use client';

import { useEffect, useState } from 'react';

type User = { id: number; name: string; email: string };

export default function Home() {
    const [users, setUsers] = useState<User[]>([]);
    const [error, setError] = useState<string | null>(null);

    const API = process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:3001';

    useEffect(() => {
        fetch(`${API}/api/users`)
            .then((r) => {
                if (!r.ok) throw new Error(`HTTP ${r.status}`);
                return r.json();
            })
            .then(setUsers)
            .catch((e) => setError(String(e)));
    }, [API]);

    return (
        <main style={{ padding: 24 }}>
            <h1>Frontend</h1>
            <p>Backend URL: {API}</p>

            {error && <p style={{ color: 'red' }}>Error: {error}</p>}

            <h2>Users</h2>
            {users.length === 0 ? (
                <p>No users yet.</p>
            ) : (
                <ul>
                    {users.map((u) => (
                        <li key={u.id}>
                            {u.name} — {u.email}
                        </li>
                    ))}
                </ul>
            )}
        </main>
    );
}
