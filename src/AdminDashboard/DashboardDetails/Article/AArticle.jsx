import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import './Article.css';

const AArticle = () => {
    const [articles, setArticles] = useState([]);
    const [filteredArticles, setFilteredArticles] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://saha-reno-portfolio-backend.onrender.com/article');
                const data = await response.json();
                setArticles(data);
                setFilteredArticles(data);
                setLoading(false); // Set loading to false after data is received
            } catch (error) {
                console.error('Error fetching articles:', error);
                setLoading(false); // Set loading to false in case of an error
            }
        };

        fetchData();
    }, []);

    const handleFilter = (type) => {
        const filtered = type
            ? articles.filter(article => article.types === type)
            : articles;

        console.log(filtered);
        setFilteredArticles(filtered);
    };

    const handleDelete = async (id) => {
        try {
            const result = await Swal.fire({
                title: 'Are you sure?',
                text: 'You will not be able to recover this article!',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#d33',
                cancelButtonColor: '#3085d6',
                confirmButtonText: 'Yes, delete it!'
            });

            if (result.isConfirmed) {
                await fetch(`https://saha-reno-portfolio-backend.onrender.com/article/${id}`, {
                    method: 'DELETE',
                });

                const response = await fetch('https://saha-reno-portfolio-backend.onrender.com/article');
                const data = await response.json();
                setArticles(data);
                setFilteredArticles(data);

                Swal.fire({
                    icon: 'success',
                    title: 'Article deleted successfully!',
                    showConfirmButton: false,
                    timer: 1500,
                });
            }
        } catch (error) {
            console.error('Error deleting article:', error);

            Swal.fire({
                icon: 'error',
                title: 'Error deleting article',
            });
        }
    };

    return (
        <div className='mainArticleSection'>
            {loading && <div className='MainLoader text-center py-52'><span className="loader"></span></div>}
            {!loading && (
                <>
                    <div>
                        <b>
                            <button className='me-2 px-2 text-white bg-emerald-400 rounded rounded-sm'  onClick={() => handleFilter()}>All</button>
                            <button className='me-2 px-2 text-white bg-emerald-400 rounded rounded-sm' onClick={() => handleFilter('Journal')}>Journal</button>
                            <button className='me-2 px-2 text-white bg-emerald-400 rounded rounded-sm' onClick={() => handleFilter('Conference Paper')}>Conference</button>
                            <button className='me-2 px-2 text-white bg-emerald-400 rounded rounded-sm'  onClick={() => handleFilter('Book Chapter')}>Book Chapter</button>
                        </b>
                    </div>

                    <div>
                        {filteredArticles.map(article => (
                            <div className='filterArticleDesign' key={article._id}>
                                <h3><b>{article.title}</b></h3>
                                <p>Authors: {article.authors}</p>
                                <p>DOI: {article.DOI}</p>
                                <p>ISSN: {article.ISSN}</p>
                                <p>Issue Date: {article.issueDate}</p>
                                <p>Type: {article.types}</p>
                                <button className='btn btn-error' onClick={() => handleDelete(article._id)}>Delete</button>
                            </div>
                        ))}
                    </div>
                </>
            )}
        </div>
    );
};

export default AArticle;
