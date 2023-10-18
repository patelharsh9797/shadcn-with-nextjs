import EditorForm from "@/components/EditorForm";

export default function EditorPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 ">
      <div className="w-full flex-1 lg:w-1/2 ">
        <h1 className="mb-16 text-center text-4xl font-semibold text-primary underline underline-offset-4">
          Rich text Editor!
        </h1>
        <EditorForm />
      </div>
    </main>
  );
}
