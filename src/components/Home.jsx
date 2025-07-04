const Home = () => {
    return <div className="p-6 max-w-xl mx-auto my-5 bg-white rounded-xl shadow-md">
        <p className="text-lg font-semibold text-gray-800  mb-4">
            Visualizations of some graph traversal algorithms:
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Dijkstra's Algorithm</li>
            <li>Bellman-Ford Algorithm</li>
            <li>Floyd-Warshall Algorithm</li>
        </ul>
        <p className="text-lg font-semibold text-gray-800 my-4">Visualizations of finding minimum spanning tree</p>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Kruskal's Algorithm</li>
        </ul>
    </div>
};

export default Home;
