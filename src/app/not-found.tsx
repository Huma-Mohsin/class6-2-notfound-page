function ErrorHandling() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-red-100 p-6">
            <h1 className="text-3xl font-bold text-red-600 mb-4">Sorry, The Page Does Not Exist...</h1>
            <p className="text-lg text-gray-700">Try with a relevant search...</p>
        </div>
    );
}

export default ErrorHandling;
