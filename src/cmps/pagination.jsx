import React from "react";

const Pagination = ({ totalPosts, postsPerPage, setCurrentPage, currentPage, }) => {
    let pages = [];
    let totalPages = Math.ceil(totalPosts / postsPerPage)

    const switchPage = (operator) => {
        if (operator === "+" && currentPage < totalPages) setCurrentPage(currentPage + 1)
        else if (operator === "-" && currentPage > 1) setCurrentPage(currentPage - 1)
    }

    for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
    }

    return (
        <div className='pagination'>
            <div className="page-switch-btn" onClick={() => switchPage("-")} ><span style={{ fontSize: "20px" }}>←</span>  Prev</div>
            <div>
                {pages.map((page, index) => {
                    return (
                        <button
                            key={index}
                            onClick={() => setCurrentPage(page)}
                            className={page == currentPage ? "current-page-btn" : "page-btn"}>
                            {page}
                        </button>
                    );
                })}
            </div>
            <div className="page-switch-btn" onClick={() => switchPage("+")}>Next <span style={{ fontSize: "20px" }}>→</span></div>
        </div>
    );
};

export default Pagination;