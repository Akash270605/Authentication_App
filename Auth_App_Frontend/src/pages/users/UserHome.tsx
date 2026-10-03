import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  Users,
  Activity,
  CheckCircle,
  Clock,
  ArrowUpRight,
} from "lucide-react";
import useAuth from "@/auth/store";
import { getCurrentUser } from "@/services/AuthService";
import type User from "@/models/User";
import toast from "react-hot-toast";


function UserHome() {
    const user = useAuth(state => state.user);
    const [user1, setUser1] = useState<User | null>(null);

    const getUserData = async() => {
        try{
            const user1 = await getCurrentUser(user?.email);
            setUser1(user1);
            toast.success("You can access secured apis");
        }catch(error){
            console.log(error);
            toast.error("Error in getting data");
        }
    }

    const stats = [
    {
      title: "Total Projects",
      value: "12",
      description: "+2 this month",
      icon: Activity,
    },
    {
      title: "Completed",
      value: "8",
      description: "66.7% completion rate",
      icon: CheckCircle,
    },
    {
      title: "Pending",
      value: "4",
      description: "Needs your attention",
      icon: Clock,
    },
    {
      title: "Team Members",
      value: "6",
      description: "+1 this month",
      icon: Users,
    },
  ];

  const activities = [
    {
      title: "Project Alpha completed",
      time: "2 hours ago",
    },
    {
      title: "New team member joined",
      time: "5 hours ago",
    },
    {
      title: "Project Beta was updated",
      time: "Yesterday",
    },
    {
      title: "New task assigned to you",
      time: "2 days ago",
    },
  ];

  return (
    <div className="space-y-6 p-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold tracking-tight">
          Dashboard
        </h1>

        <p className="text-muted-foreground">
          Welcome back! Here's an overview of your account.
        </p>
      </div>

      {/* Stats */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => {
          const Icon = stat.icon;

          return (
            <Card key={stat.title}>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">
                  {stat.title}
                </CardTitle>

                <Icon className="h-5 w-5 text-muted-foreground" />
              </CardHeader>

              <CardContent>
                <div className="text-2xl font-bold">
                  {stat.value}
                </div>

                <p className="text-xs text-muted-foreground">
                  {stat.description}
                </p>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Main Content */}
      <div className="grid gap-6 lg:grid-cols-3">
        {/* Overview */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Overview</CardTitle>
          </CardHeader>

          <CardContent>
            <div className="space-y-6">
              {/* Progress */}
              <div>
                <div className="mb-2 flex justify-between text-sm">
                  <span>Project Progress</span>
                  <span className="font-medium">67%</span>
                </div>

                <div className="h-2 w-full rounded-full bg-muted">
                  <div
                    className="h-2 rounded-full bg-primary"
                    style={{ width: "67%" }}
                  />
                </div>
              </div>

              {/* Tasks */}
              <div className="grid gap-4 sm:grid-cols-3">
                <div className="rounded-lg border p-4">
                  <p className="text-sm text-muted-foreground">
                    Total Tasks
                  </p>
                  <p className="mt-1 text-2xl font-bold">
                    45
                  </p>
                </div>

                <div className="rounded-lg border p-4">
                  <p className="text-sm text-muted-foreground">
                    Completed
                  </p>
                  <p className="mt-1 text-2xl font-bold">
                    32
                  </p>
                </div>

                <div className="rounded-lg border p-4">
                  <p className="text-sm text-muted-foreground">
                    Remaining
                  </p>
                  <p className="mt-1 text-2xl font-bold">
                    13
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Recent Activity */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
          </CardHeader>

          <CardContent>
            <div className="space-y-5">
              {activities.map((activity, index) => (
                <div
                  key={index}
                  className="flex items-start justify-between gap-3"
                >
                  <div>
                    <p className="text-sm font-medium">
                      {activity.title}
                    </p>

                    <p className="text-xs text-muted-foreground">
                      {activity.time}
                    </p>
                  </div>

                  <ArrowUpRight className="h-4 w-4 text-muted-foreground" />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
        </CardHeader>

        <CardContent>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            <button className="rounded-lg border p-4 text-left transition hover:bg-muted">
              <p className="font-medium">Create Project</p>
              <p className="mt-1 text-sm text-muted-foreground">
                Start a new project
              </p>
            </button>

            <button className="rounded-lg border p-4 text-left transition hover:bg-muted">
              <p className="font-medium">Add Task</p>
              <p className="mt-1 text-sm text-muted-foreground">
                Create a new task
              </p>
            </button>

            <button className="rounded-lg border p-4 text-left transition hover:bg-muted">
              <p className="font-medium">View Projects</p>
              <p className="mt-1 text-sm text-muted-foreground">
                Manage your projects
              </p>
            </button>

            <button onClick={getUserData} className="rounded-lg border p-4 text-left transition hover:bg-muted">
              <p className="font-medium">Current User</p>
              <p className="mt-1 text-sm text-muted-foreground">
                Manage your account
              </p>
              <p>
                {user1?.name}
            </p>
            </button>
          </div>
        </CardContent>
      </Card>
    </div>
  );

}

export default UserHome;