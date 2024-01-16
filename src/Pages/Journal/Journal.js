import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Journal.css'

const Journal = () => {
    const [journalArticles, setJournalArticles] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://saha-reno-portfolio-backend.onrender.com/article')
            .then(response => response.json())
            .then(data => {
                console.log(data);  // Log the data to the console
                const filteredJournalArticles = data.filter(article => article.types === 'Journal');
                setJournalArticles(filteredJournalArticles);
                setLoading(false); // Set loading to false after data is received
            })
            .catch(error => {
                console.error('Error fetching articles:', error);
                setLoading(false); // Set loading to false in case of an error
            });
    }, []);

    return (
        <section className='paper-body'>
            {loading && <div className='MainLoader text-center py-52'><span class="loader"></span></div>}
            {!loading && journalArticles.map(article => (
                <div key={article.id} className='paper-design'>
                    <div className='paper'>
                        <div>
                            <h1 className='text-header'>{article.title}</h1>
                            <h1>Authors: {article.authors} <br /> DOI: {article.DOI} <br /> ISSN: {article.ISSN}</h1>
                        </div>
                        <div>
                            <h1 className='s-r'>{article.od1} <br /> {article.od2} <br /> {article.od3} <br /> {article.od4} <br /> {article.od5}</h1>
                        </div>
                    </div>
                    <Link target='_blank' to={article.link} className='btn btn-outline mt-5'>View Details</Link>
                </div>
            ))}
        </section>
    );
};

export default Journal;
