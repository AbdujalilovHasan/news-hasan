import React, { Component } from 'react';
import axios from 'axios';

class CountryNews extends Component {
    constructor(props) {
        super(props);
        this.state = {
            countryArticles: [],
            searchQuery: '',
            currentPage: 1,
            articlesPerPage: 5,
            filteredArticles: [], // Yangi o'zgaruvchi
        };
    }

    componentDidMount() {
        this.fetchData();
    }

    fetchData = async () => {
        try {
            const country = await axios.get('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=12e354c794094034910be3f3b9cb021c');
            this.setState({ countryArticles: country.data.articles, filteredArticles: country.data.articles });
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    handleSearchChange = (e) => {
        const query = e.target.value;
        const filteredArticles = this.state.countryArticles.filter(article =>
            article.title.toLowerCase().includes(query.toLowerCase())
        );

        this.setState({ searchQuery: query, filteredArticles, currentPage: 1 });
    };

    handlePageChange = (page) => {
        this.setState({ currentPage: page });
    };

    render() {
        const { filteredArticles, searchQuery, currentPage, articlesPerPage } = this.state;

        const indexOfLastArticle = currentPage * articlesPerPage;
        const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
        const currentArticles = filteredArticles.slice(indexOfFirstArticle, indexOfLastArticle);
        const totalPages = Math.ceil(filteredArticles.length / articlesPerPage);

        return (
            <div className="container mt-4">
                <input
                    type="text"
                    className="form-control mb-4"
                    placeholder="Search Country News"
                    value={searchQuery}
                    onChange={this.handleSearchChange}
                />
                <h1 className="mb-4">Country News ({currentArticles.length})</h1>
                <div className="row">
                    {currentArticles.map((article, index) => (
                        <div className="col-md-4 mb-4" key={index}>
                            <div className="card" style={{ height: '100%' }}>
                                <img src={article.urlToImage} className="card-img-top" alt={article.title} />
                                <div className="card-body d-flex flex-column">
                                    <h5 className="card-title" style={{ height: '40px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{article.title}</h5>
                                    <p className="card-text" style={{ flexGrow: 1, height: '60px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{article.description}</p>
                                    <a href={article.url} className="btn btn-primary mt-auto" target="_blank" rel="noopener noreferrer">Read More</a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="d-flex flex-wrap gap-2 justify-content-center align-items-center mt-4 mb-5">
                    {Array.from({ length: totalPages }, (_, i) => (
                        <button
                            key={i + 1}
                            className={`btn ${currentPage === i + 1 ? 'btn-primary' : 'btn-secondary'} mx-1`}
                            onClick={() => this.handlePageChange(i + 1)}
                        >
                            {i + 1}
                        </button>
                    ))}
                </div>
            </div>
        );
    }
}

export default CountryNews;
