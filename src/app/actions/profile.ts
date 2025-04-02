"use server";

import { PrismaClient } from "@prisma/client";
import { getServerSession } from "next-auth";
import { revalidatePath } from "next/cache";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

const prisma = new PrismaClient();

export async function getUserProfile() {
  const session = await getServerSession(authOptions);
  
  if (!session?.user?.email) {
    throw new Error("Usuário não autenticado");
  }
  
  const user = await prisma.user.findUnique({
    where: { email: session.user.email },
    select: {
      email: true,
      caloriesGoal: true,
    },
  });
  
  return user;
}

export async function updateUserProfile(data: { email?: string, calorieGoal?: number }) {
  const session = await getServerSession(authOptions);
  
  if (!session?.user?.email) {
    throw new Error("Usuário não autenticado");
  }
  
  const updatedUser = await prisma.user.update({
    where: { email: session.user.email },
    data: {
      email: data.email,
      caloriesGoal: data.calorieGoal ? parseInt(data.calorieGoal.toString()) : undefined,
    },
  });
  
  revalidatePath('/app/profile');
  
  return updatedUser;
}
