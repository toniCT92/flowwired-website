let feedback: any[] = [];

export async function GET() {
  return Response.json(feedback);
}

export async function POST(req: Request) {
  const { message } = await req.json();

  const newComment = {
    message,
    user: "Anonymous",
    createdAt: new Date().toISOString(),
  };

  feedback.unshift(newComment);

  return Response.json(newComment);
}
