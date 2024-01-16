import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const BookChapter = () => {
    const [book, setBook] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://saha-reno-portfolio-backend.onrender.com/article')
            .then(response => response.json())
            .then(data => {
                console.log(data);
                const filteredBook = data.filter(article => article.types === 'Book Chapter');
                setBook(filteredBook);
                setLoading(false); // Set loading to false after data is received
            })
            .catch(error => {
                console.error('Error fetching articles:', error);
                setLoading(false); // Set loading to false in case of an error
            });
    }, []);

    return (
        <div>
            <section className='paper-body'>
                {loading && <div className='MainLoader text-center py-52'><span class="loader"></span></div>}
                {!loading && book.map(article => (
                    <div key={article.id} className='paper-design'>
                        <div className='paper'>
                            <div>
                                <h1 className='text-header'>{article.title}</h1>
                                <h1>Authors: {article.authors} <br /> {article.Conference} <br /> DOI: {article.DOI} <br /> ISSN: {article.ISSN}</h1>
                            </div>
                            <div>
                                <h1 className='s-r'>{article.od1} <br /> {article.od2} <br /> {article.od3} <br /> {article.od4} <br /> {article.od5}</h1>
                            </div>
                        </div>
                        <Link target='_blank' to={article.link} className='btn btn-outline mt-5'>View Details</Link>
                    </div>
                ))}
            </section>
        </div>
    );
};

export default BookChapter;
