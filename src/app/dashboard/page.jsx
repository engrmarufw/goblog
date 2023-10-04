"use client"
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import React from 'react';
import useSWR from 'swr'


const Dashboard = () => {
    const session = useSession()
    const router = useRouter()
    const fetcher = (...args) => fetch(...args).then(res => res.json());
    const { data, error, isLoading } = useSWR(`/api/posts?username=${session?.data?.user?.name}`, fetcher)

    if (session.status === "loading") {
        return <div className=" flex items-center justify-center">
            <span className="loading loading-ball loading-lg"></span>

        </div>
    }
    if (session.status === "unauthenticated") {
        router?.push("/dashboard/login")
    }

    console.log(data);

    if (session.status === "authenticated") {
        return (
            <div>
                dashboard
            </div>
        );
    }

};

export default Dashboard;