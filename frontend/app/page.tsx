'use client';
import { useEffect, useState } from 'react';

interface User {
    id: number;
    name: string;
    email: string;
}

export default function Home() {
    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    // Fetch users from your backend
    useEffect(() => {
        async function fetchUsers() {
            try {
                const res = await fetch('http://localhost:3001/api/users');
                if (!res.ok) {
                    throw new Error(`Error: ${res.status}`);
                }
                const data = await res.json();
                setUsers(data);
            } catch (err: any) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        }

        fetchUsers();
    }, []);

    if (loading) return <p>Loading users...</p>;
    if (error) return <p style={{ color: 'red' }}>Error: {error}</p>;

    return (
        <main style={{ padding: 24 }}>
            <h1>Users</h1>
            {users.length === 0 ? (
                <p>No users found.</p>
            ) : (
                <ul>
                    {users.map((user) => (
                        <li key={user.id}>
                            <strong>{user.name}</strong> — {user.email}
                        </li>
                    ))}
                </ul>
            )}
        </main>
    );
}
