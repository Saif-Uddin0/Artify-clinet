import React, { use, useEffect, useState } from 'react';
import { AuthContext } from '../Provider/AuthContext';
import { toast } from 'react-toastify';
import Loader from '../Component/Shared/Loader';
import { BadgeCheck, HeartOff } from 'lucide-react';

const MyFavourite = () => {
    const { user } = use(AuthContext);
    const [favourite, setFavourite] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (user) {
            setLoading(true);
            fetch('https://artify-server-nine.vercel.app/favourite')
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const favoriteFilter = data.filter(fav => fav.userEmail === user.email)
                    console.log(favoriteFilter);
                    setFavourite(favoriteFilter)
                })
                .catch(err => {
                    toast.error(err.message)
                })
                .finally(() => {
                    setLoading(false);
                })
        }
    }, [user])



    if (loading) {
        return <div><Loader></Loader></div>
    }


    const handleUnfav = (_id) => {
        console.log(_id);
        fetch(`https://artify-server-nine.vercel.app/favourite/${_id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);

                if (data.deletedCount > 0) {
                    toast.success('Remove from Favourite');
                    setFavourite((prev) => prev.filter((fav) => fav._id !== _id));
                }
                else {
                    toast.error("Failed to remove. Try again!");
                }

            })
            .catch(err => toast.error(err.message))

    }



    return (
        <div className="container mx-auto px-4 py-12">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-gray-800">
                <span className="text-indigo-600">Favourite</span> Artworks <span>({favourite.length})</span>
            </h2>

            {favourite.length === 0 ? (
                <p className="text-center text-gray-600 text-lg">
                    You haven’t added any favourites yet
                </p>
            ) : (
                <div
                    className=" mt-10
          grid gap-5 p-5 
          sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 
          justify-items-center
          "
                >
                    {favourite.map((item) => (
                        <div
                            key={item._id}
                            className="
              w-full max-w-sm 
              bg-gradient-to-br from-pink-300/20 via-purple-300/20 to-blue-300/20
              backdrop-blur-xl border border-white/30
               p-5 rounded-bl-4xl rounded-tr-4xl 
              shadow-sm hover:shadow-xl transition-all duration-500
              hover:-translate-y-2 hover:scale-[1.02]
              "
                        >
                            {/* Image Section */}
                            <div className="relative overflow-hidden rounded-2xl mb-4 group">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="
                    w-full h-64 object-cover rounded-2xl
                    transition-all duration-700 ease-in-out
                    group-hover:scale-110 group-hover:brightness-110
                  "
                                />

                                {/* Badges */}
                                <div className="absolute top-3 left-3 flex gap-2 flex-wrap">
                                    <span className="
                    px-3 py-1 text-[11px] font-semibold 
                    bg-gradient-to-r from-indigo-500 to-purple-500 text-white 
                    rounded-full shadow-sm 
                    backdrop-blur-sm
                    hover:scale-105 transition-transform
                  ">
                                        {item.category}
                                    </span>
                                    <span className="
                    px-3 py-1 text-[11px] font-semibold 
                    bg-gradient-to-r from-pink-500 to-rose-500 text-white 
                    rounded-full shadow-sm 
                    backdrop-blur-sm
                    hover:scale-105 transition-transform
                  ">
                                        {item.medium}
                                    </span>
                                </div>


                                <div className="
                  absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent 
                  opacity-0 group-hover:opacity-60 transition-opacity duration-700
                "></div>
                            </div>


                            <div className="text-center space-y-2">
                                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-indigo-600 transition">
                                    {item.title}
                                </h3>
                                <p className="text-indigo-700 font-bold text-lg">${item.price}</p>


                                <button onClick={() => handleUnfav(item._id)}
                                    className="
                    mt-4 w-full flex items-center justify-center gap-2
                    bg-gradient-to-r from-red-100 to-pink-100 
                    hover:from-red-200 hover:to-pink-200
                    text-red-600 font-medium py-2 rounded-full
                    shadow-sm hover:shadow-md transition-all duration-300
                  "
                                >
                                    <HeartOff size={16} />
                                    Unfavourite
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );

};

export default MyFavourite;