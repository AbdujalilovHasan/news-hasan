import React, { Component } from 'react';
import axios from 'axios';

class AppleNews extends Component {
    constructor(props) {
        super(props);
        this.state = {
            appleArticles: [],
            searchQuery: '',
            currentPage: 1,
            articlesPerPage: 5,
        };
    }

    componentDidMount() {
        this.fetchData();
    }

    fetchData = async () => {
        try {
            const apple = await axios.get('https://newsapi.org/v2/everything?q=apple&from=2024-08-21&sortBy=publishedAt&apiKey=12e354c794094034910be3f3b9cb021c');
            this.setState({ appleArticles: apple.data.articles });
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    handleSearchChange = (e) => {
        this.setState({ searchQuery: e.target.value, currentPage: 1 });
    };

    handlePageChange = (page) => {
        this.setState({ currentPage: page });
    };

    goToNextPage = () => {
        this.setState((prevState) => ({
            currentPage: Math.min(prevState.currentPage + 1, Math.ceil(this.state.filteredArticles.length / prevState.articlesPerPage)),
        }));
    };

    goToPrevPage = () => {
        this.setState((prevState) => ({
            currentPage: Math.max(prevState.currentPage - 1, 1),
        }));
    };

    render() {
        const { appleArticles, searchQuery, currentPage, articlesPerPage } = this.state;
        const filteredArticles = appleArticles.filter(article =>
            article.title.toLowerCase().includes(searchQuery.toLowerCase())
        );

        const indexOfLastArticle = currentPage * articlesPerPage;
        const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
        const currentArticles = filteredArticles.slice(indexOfFirstArticle, indexOfLastArticle);
        const totalPages = Math.ceil(filteredArticles.length / articlesPerPage);

        return (
            <div className="container mt-4">
                <input
                    type="text"
                    className="form-control mb-4"
                    placeholder="Search Apple News"
                    value={searchQuery}
                    onChange={this.handleSearchChange}
                />
                <h1 className="mb-4">Apple News ({currentArticles.length})</h1>
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
                <div className="d-flex gap-2 flex-wrap justify-content-center align-items-center mt-4 mb-5">
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

export default AppleNews;
