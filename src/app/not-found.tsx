"use client";

import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] w-full flex items-center justify-center bg-gray-50 py-12">
      <Card className="w-full max-w-md mx-4">
        <CardContent className="pt-6 text-center">
          <div className="flex flex-col items-center mb-4 gap-2">
            <AlertCircle className="h-12 w-12 text-red-500 mb-2" />
            <h1 className="text-2xl font-bold text-gray-900">404 - Page Not Found</h1>
          </div>

          <p className="mt-2 text-sm text-gray-600 mb-6">
            The page you are looking for does not exist or has been moved.
          </p>

          <Button asChild className="bg-secondary hover:bg-secondary/90 text-white rounded-full px-6">
            <Link href="/">
              Return Home
            </Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
