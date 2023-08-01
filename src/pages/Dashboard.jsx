import React from "react";
import "./dashboard.css";
import DownloadButton from "../components/DownloadButton";

const Dashboard = () => {
    const data = [
        { id: 1, name: 'John Doe', title: 'Note 1', description: 'Description 1', downloadUrl: 'example.com/download/1' },
        { id: 2, name: 'Jane Smith', title: 'Note 2', description: 'Description 2', downloadUrl: 'example.com/download/2' },
        // Add more sample data if needed
    ];
    return (
        <div className="dashboard">
            <header className="greeting">
                <h1>Welcome to the Dashboard</h1>
                {/* Greeting message for the user */}
                <p>Hello, User!</p>
            </header>
            {/* Total number of notes */}
            <div className="box1">
                <h2>Total Notes</h2>
                <p>10</p>
            </div>
            {/* Total number of downloads */}
            <div className="box2">
                <h2>Total Downloads</h2>
                <p>100</p>
            </div>
            {/* Table with columns */}
            <div className="table">
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Title</th>
                            <th>Description</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* Table rows will be populated dynamically */}
                        {data.map((item) => (
                            <tr key={item.id}>
                                <td>{item.name}</td>
                                <td>{item.title}</td>
                                <td>{item.description}</td>
                                <td>
                                    {/* Render the DownloadButton component */}
                                    <DownloadButton url={item.downloadUrl} />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default Dashboard;