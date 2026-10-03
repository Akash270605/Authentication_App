import React from 'react'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Badge } from "@/components/ui/badge";

import { Button } from "@/components/ui/button";

import {
  Mail,
  Phone,
  MapPin,
  Calendar,
  ShieldCheck,
  Pencil,
} from "lucide-react";


function Userprofile(){
    const user = {
    name: "Akash Kumar",
    email: "akash@example.com",
    phone: "+91 98765 43210",
    location: "India",
    role: "User",
    status: "Active",
    joined: "January 2026",
    bio: "Computer Science student interested in software development and backend technologies.",
    profileImage:
      "https://ui-avatars.com/api/?name=Akash+Kumar&size=200",
  };

  return (
    <div className="mx-auto max-w-4xl space-y-6 p-6">

      {/* Page Header */}
      <div>
        <h1 className="text-3xl font-bold tracking-tight">
          Profile
        </h1>

        <p className="text-muted-foreground">
          View and manage your personal information.
        </p>
      </div>

      {/* Profile Card */}
      <Card>
        <CardContent className="p-6">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center">

            {/* Profile Picture */}
            <div className="flex justify-center sm:justify-start">
              <img
                src={user.profileImage}
                alt={user.name}
                className="h-32 w-32 rounded-full border object-cover"
              />
            </div>

            {/* Basic Information */}
            <div className="flex-1 text-center sm:text-left">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
                <h2 className="text-2xl font-bold">
                  {user.name}
                </h2>

                <Badge variant="secondary">
                  {user.role}
                </Badge>
              </div>

              <p className="mt-1 text-muted-foreground">
                {user.email}
              </p>

              <p className="mt-3 text-sm text-muted-foreground">
                {user.bio}
              </p>

              <Button className="mt-4" size="sm">
                <Pencil className="mr-2 h-4 w-4" />
                Edit Profile
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Personal Information */}
      <Card>
        <CardHeader>
          <CardTitle>Personal Information</CardTitle>
        </CardHeader>

        <CardContent>
          <div className="grid gap-6 sm:grid-cols-2">

            {/* Email */}
            <div className="flex items-center gap-3">
              <Mail className="h-5 w-5 text-muted-foreground" />

              <div>
                <p className="text-sm text-muted-foreground">
                  Email
                </p>

                <p className="font-medium">
                  {user.email}
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-3">
              <Phone className="h-5 w-5 text-muted-foreground" />

              <div>
                <p className="text-sm text-muted-foreground">
                  Phone
                </p>

                <p className="font-medium">
                  {user.phone}
                </p>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-center gap-3">
              <MapPin className="h-5 w-5 text-muted-foreground" />

              <div>
                <p className="text-sm text-muted-foreground">
                  Location
                </p>

                <p className="font-medium">
                  {user.location}
                </p>
              </div>
            </div>

            {/* Joined */}
            <div className="flex items-center gap-3">
              <Calendar className="h-5 w-5 text-muted-foreground" />

              <div>
                <p className="text-sm text-muted-foreground">
                  Joined
                </p>

                <p className="font-medium">
                  {user.joined}
                </p>
              </div>
            </div>

          </div>
        </CardContent>
      </Card>

      {/* Account Information */}
      <Card>
        <CardHeader>
          <CardTitle>Account Information</CardTitle>
        </CardHeader>

        <CardContent>
          <div className="flex items-center justify-between rounded-lg border p-4">

            <div className="flex items-center gap-3">
              <ShieldCheck className="h-6 w-6 text-muted-foreground" />

              <div>
                <p className="font-medium">
                  Account Status
                </p>

                <p className="text-sm text-muted-foreground">
                  Your account is currently active.
                </p>
              </div>
            </div>

            <Badge>
              {user.status}
            </Badge>

          </div>
        </CardContent>
      </Card>

    </div>
  );
}

export default Userprofile;