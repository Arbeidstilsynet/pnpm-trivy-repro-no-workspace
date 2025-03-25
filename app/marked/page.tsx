"use client";

// @ts-expect-error 7016
import marked from "marked";

export default function MarkedPage() {
  const markdown = "## Hello, **world**!";
  const htmlContent = marked(markdown);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-2xl font-bold mb-4">Marked Example</h1>
      <p className="mb-4">
        This is a simple demonstration of Marked markdown parsing.
      </p>

      <div className="mb-4">
        <h2 className="text-lg font-medium">Original Markdown:</h2>
        <pre className="p-2 bg-gray-100 rounded">{markdown}</pre>
      </div>

      <div className="mb-4">
        <h2 className="text-lg font-medium">Parsed HTML:</h2>
        <pre className="p-2 bg-gray-100 rounded">{htmlContent}</pre>
      </div>

      <div className="mb-4">
        <h2 className="text-lg font-medium">Rendered Result:</h2>
        <div
          className="p-2 border rounded"
          dangerouslySetInnerHTML={{ __html: htmlContent }}
        />
      </div>
    </div>
  );
}
