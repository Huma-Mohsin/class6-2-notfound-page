export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-gray-50">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start text-center sm:text-left">
        <h1 className="text-4xl font-bold text-red-600">Page Not Found</h1>
        
        <p className="text-lg text-gray-800">
          In Next.js 13 and newer, we can create a custom 404 (Page Not Found) page by following a specific file convention. Simply name the file <code className="bg-gray-200 p-1 rounded">not-found.tsx</code> within any route directory to show a custom "Page Not Found" message when a user navigates to a non-existent route or when data isn’t available.
        </p>
        
        <br />
        
        <p className="text-lg text-gray-800">
          <strong>Steps to Customize the 404 Page:</strong>
        </p>
        
        <ol className="list-decimal pl-6 text-lg text-gray-800">
          <li>Create the <code className="bg-gray-200 p-1 rounded">not-found.tsx</code> File: Place this file within the app directory or any nested directory to handle missing routes or data for specific sections.</li>
          <li>Add Custom Content: Customize the <code className="bg-gray-200 p-1 rounded">not-found.tsx</code> component to display a user-friendly message or helpful navigation.</li>
        </ol>
      </main>
    </div>
  );
}
