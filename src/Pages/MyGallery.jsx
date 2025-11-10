import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthContext";
import { Pencil, Trash2 } from "lucide-react";
import Swal from "sweetalert2";
import Loader from "../Component/Shared/Loader";

const MyGallery = () => {
    const { user } = useContext(AuthContext);
    const [arts, setArts] = useState([]);
    const [loader, setLoader] = useState(false);

    useEffect(() => {
        if (!user?.email) return;
        setLoader(true);
        fetch(`http://localhost:3000/artwork`)
            .then((res) => res.json())
            .then((data) => {
                const myArts = data.filter((art) => art.userEmail === user.email);
                setArts(myArts);
                setLoader(false);
            });
    }, [user]);

    const handleDelete = (_id) => {
        console.log(_id);

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:3000/artwork/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your Artwork has been deleted.",
                                icon: "success"
                            });
                            const remainingArts =  arts.filter(art => art._id !== _id);
                            setArts(remainingArts);
                        }

                    })


            }
        });
    };

    const handleUpdate = (art) => {
        Swal.fire({
            title: "Edit Feature Coming Soon!",
            text: `You selected: ${art.title}`,
            icon: "info",
        });
    };

    if (loader) return <Loader />;

    return (
        <div className="container mx-auto mt-10 px-3 sm:px-5">
            <h3 className="text-4xl md:text-3xl font-semibold text-center mb-8 text-gray-800">
                My Gallery ({arts.length})
            </h3>

            {arts.length === 0 ? (
                <p className="text-gray-500 text-center italic">No artworks found.</p>
            ) : (
                <div className="overflow-x-auto mt-10">
                    <table className="min-w-full bg-white shadow-md rounded-xl border border-gray-100">
                        <thead className="glass-bg text-gray-700 text-xs sm:text-sm font-semibold">
                            <tr className="">
                                <th className="py-3 sm:py-4 px-3 sm:px-5 text-left">SL</th>
                                <th className="py-3 sm:py-4 px-3 sm:px-5 text-left">Artwork</th>
                                <th className="py-3 sm:py-4 px-3 sm:px-5 text-left hidden md:table-cell">
                                    Category
                                </th>
                                <th className="py-3 sm:py-4 px-3 sm:px-5 text-left hidden sm:table-cell">
                                    Price
                                </th>
                                <th className="py-3 sm:py-4 px-3 sm:px-5 text-center">Actions</th>
                            </tr>
                        </thead>

                        <tbody className="text-xs sm:text-sm text-gray-600">
                            {arts.map((art, index) => (
                                <tr
                                    key={art._id}
                                    className="border-t border-gray-100 hover:bg-indigo-50 hover:shadow-md transition-all duration-200 transform hover:-translate-y-[1px]"
                                >
                                    <td className="py-3 sm:py-4 px-3 sm:px-5 align-middle text-center sm:text-left">
                                        {index + 1}
                                    </td>

                                    {/* Artwork Info */}
                                    <td className="py-3 sm:py-4 px-3 sm:px-5 flex items-center gap-3">
                                        <img
                                            src={art.image}
                                            alt={art.title}
                                            className="w-10 h-10 sm:w-12 sm:h-12 object-cover rounded-full border border-gray-200 shadow-sm transform transition-transform duration-300 hover:scale-110"
                                        />
                                        <div>
                                            <p className="font-medium text-gray-800 text-sm sm:text-base">
                                                {art.title}
                                            </p>
                                            <p className="text-[10px] sm:text-xs text-gray-500">
                                                {art.dimensions}
                                            </p>
                                            {/* Hidden fields for mobile view */}
                                            <p className="text-[11px] text-gray-500 block md:hidden">
                                                {art.category}
                                            </p>
                                            <p className="text-[11px] text-indigo-600 font-semibold block sm:hidden">
                                                ${art.price}
                                            </p>
                                        </div>
                                    </td>

                                    <td className="py-3 sm:py-4 px-3 sm:px-5 align-middle hidden md:table-cell">
                                        {art.category}
                                    </td>
                                    <td className="py-3 sm:py-4 px-3 sm:px-5 text-indigo-600 font-semibold align-middle hidden sm:table-cell">
                                        ${art.price}
                                    </td>

                                    {/* Actions */}
                                    <td className="py-3 sm:py-4 px-3 sm:px-5 text-center align-middle">
                                        <div className="flex justify-center sm:justify-center items-center gap-2 sm:gap-3 flex-wrap">
                                            <button
                                                onClick={() => handleUpdate(art)}
                                                className="flex items-center gap-1 text-[11px] sm:text-xs md:text-sm bg-gradient-to-r from-indigo-600  to-purple-500 text-white font-medium px-2 sm:px-3 py-1.5 rounded-lg transition-all duration-300 shadow-sm hover:shadow-lg transform hover:scale-105"
                                            >
                                                <Pencil size={13} />
                                                Update
                                            </button>
                                            <button
                                                onClick={() => handleDelete(art._id)}
                                                className="flex items-center gap-1 text-[11px] sm:text-xs md:text-sm bg-red-500 hover:bg-red-600 text-white font-medium px-2.5 sm:px-3 py-1.5 rounded-lg transition-all duration-300 shadow-sm hover:shadow-lg transform hover:scale-105"
                                            >
                                                <Trash2 size={14} />
                                                Delete
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default MyGallery;
