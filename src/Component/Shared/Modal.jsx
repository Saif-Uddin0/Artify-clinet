import React, { use } from 'react';
import { AuthContext } from '../../Provider/AuthContext';


const Modal = ({ art, handleUpdate }) => {
    return (
        <div className=''>
            <form onSubmit={handleUpdate} className="">
                <fieldset className='fieldset space-y-3'>
                    <div className="grid sm:grid-cols-2 gap-3">
                        <div>
                            <label className="text-sm font-medium text-gray-400">Image</label>
                            <input
                                required
                                name="image"
                                defaultValue={art.image || ''}
                                className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-700"
                            />
                        </div>
                        <div>
                            <label className="text-sm font-medium text-gray-400">Title</label>
                            <input
                                required
                                name="title"
                                defaultValue={art.title}
                                className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-700"
                            />
                        </div>

                        <div>
                            <label className="text-sm font-medium text-gray-400">Category</label>
                            <input
                                required
                                name="category"
                                defaultValue={art.category}
                                className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-700"
                            />
                        </div>

                        <div>
                            <label className="text-sm font-medium text-gray-400">Medium</label>
                            <input
                                required
                                name="medium"
                                defaultValue={art.medium}
                                className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-700"
                            />
                        </div>

                        <div>
                            <label className="text-sm font-medium text-gray-400">Dimensions</label>
                            <input
                                required
                                name="dimensions"
                                defaultValue={art.dimensions}
                                className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-700"
                            />
                        </div>

                        <div>
                            <label className="text-sm font-medium text-gray-400">Price ($)</label>
                            <input
                                name='price'
                                type="number"
                                defaultValue={art.price}
                                name="price"
                                className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-700"
                            />
                        </div>

                        <div>
                            <label className="text-sm font-medium text-gray-400">Visibility</label>
                            <select
                                name="visibility"
                                className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-700"
                            >
                                <option>Public</option>
                                <option>Private</option>
                            </select>
                        </div>
                    </div>

                    <div>
                        <label className="text-sm font-medium text-gray-400">Description</label>
                        <textarea
                            name="description"
                            defaultValue={art.description}
                            rows="3"
                            className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-700"
                        />
                    </div>

                    <div className="modal-action flex justify-end gap-2 mt-4">
                        <button
                            type="submit"
                            className="px-4 py-2 rounded-md btn-st hover:from-purple-600 hover:to-indigo-600 text-white font-medium shadow-md transition-all transform hover:scale-105"
                        >
                            Save Changes
                        </button>
                    </div>
                </fieldset>
            </form>
        </div>
    );
};

export default Modal;