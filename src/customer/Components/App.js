import algoliasearch from "algoliasearch/lite";
import React, { useRef } from "react";
import {
  Configure,
  HierarchicalMenu,
  Hits,
  HitsPerPage,
  InstantSearch,
  Pagination,
  RefinementList,
  SearchBox,
  SortBy,
  ToggleRefinement,
  Highlight,
  Snippet,
} from "react-instantsearch";

import {
  AlgoliaSvg,
  ClearFilters,
  ClearFiltersMobile,
  NoResults,
  NoResultsBoundary,
  Panel,
  PriceSlider,
  Ratings,
  ResultsNumberMobile,
  SaveFiltersMobile,
} from "./components";
import { ScrollTo } from "./components/ScrollTo";
// import getRouting from "./routing";
import { formatNumber } from "../Components/utils";
import "../../Theme.css";
import "../../App.css";
import "./components/Pagination.css";
import "../../App.mobile.css";
import { useNavigate } from "react-router-dom";
import Spinner from "./Spinners/Spinner";

const searchClient = algoliasearch(
  process.env.REACT_APP_ALGOLIA_APP_ID,
  process.env.REACT_APP_ALGOLIA_SEARCH_KEY
);

const indexName = process.env.REACT_APP_ALGOLIA_INDEX_NAME;
// const routing = getRouting(indexName);

export function App() {
  const containerRef = useRef(null);
  const headerRef = useRef(null);
  const searchBoxRef = useRef(null);

  React.useEffect(() => {
    const handleScroll = () => {
      const headerBottom = headerRef?.current?.getBoundingClientRect().bottom;

      if (headerBottom < 0 && window.innerWidth >= 900) {
        if (searchBoxRef.current) {
          searchBoxRef.current.style.position = "fixed";
          searchBoxRef.current.style.top = "65px";
          // searchBoxRef.current.style.left = "0";
          // searchBoxRef.current.style.width = "100%";
          // searchBoxRef.current.style.zIndex = "1000";
          // searchBoxRef.current.style.background = "#fbc300";
          searchBoxRef.current.style.boxShadow = "0 4px 4px rgba(0, 0, 0, 0.1)";
          searchBoxRef.current.style.padding = "0.5rem 1rem";
          searchBoxRef.current.style.transition = "transform 0.3s ease-in-out";
        }
      } else {
        if (searchBoxRef.current) {
          searchBoxRef.current.style.position = "static";
          searchBoxRef.current.style.boxShadow = "none";
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function openFilters() {
    document.body.classList.add("filtering");
    window.scrollTo(0, 0);
    window.addEventListener("keyup", onKeyUp);
    window.addEventListener("click", onClick);
  }

  function closeFilters() {
    document.body.classList.remove("filtering");
    containerRef.current.scrollIntoView();
    window.removeEventListener("keyup", onKeyUp);
    window.removeEventListener("click", onClick);
  }

  function onKeyUp(event) {
    if (event.key !== "Escape") {
      return;
    }

    closeFilters();
  }

  function onClick(event) {
    if (event.target !== headerRef.current) {
      return;
    }

    closeFilters();
  }

  return (
    <div className="mt-0">
      <InstantSearch
        searchClient={searchClient}
        indexName={indexName}
        // routing={routing}
        insights={true}
      >
        <header className="header" ref={headerRef}>
          <p className="header-logo">{/* <AlgoliaSvg /> */}</p>
          <div ref={searchBoxRef}>
            <SearchBox
              placeholder="Categories, price, color, …"
              submitIconComponent={SubmitIcon}
            />
          </div>
        </header>

        <Configure
          attributesToSnippet={["description:10"]}
          snippetEllipsisText="…"
          removeWordsIfNoResults="allOptional"
        />

        <ScrollTo>
          <main className="container" ref={containerRef}>
            <div className="container-wrapper">
              <section className="container-filters" onKeyUp={onKeyUp}>
                <div className="container-header">
                  <h2>Filters</h2>
                  <div className="clear-filters" data-layout="mobile">
                    <ResultsNumberMobile />
                  </div>
                </div>
                <div className="container-body">
                  <Panel header="Price">
                    <PriceSlider attribute="variants.priceWithTax" />
                  </Panel>
                  <Panel header="Refinement Options">
                    <RefinementList attribute="optionGroups.options.name" />
                  </Panel>
                  <Panel header="Categories">
                    <RefinementList attribute="collections.name" showMore />
                  </Panel>
                  <Panel header="Gender">
                    <RefinementList attribute="facetValues.name" />
                  </Panel>
                  {/* <Panel header="Refinement Options">
                  <RefinementList attribute="optionGroups.name" />
                </Panel>

                <Panel header="Category">
                  <HierarchicalMenu
                    attributes={[
                      "optionGroups.name > optionGroups.options.name",
                    ]}
                  />
                </Panel> */}

                  {/* <Panel header="Ratings">
                  <Ratings attribute="rating" />
                </Panel> */}
                </div>
              </section>
              <footer className="container-filters-footer" data-layout="mobile">
                <div className="container-filters-footer-button-wrapper">
                  <ClearFiltersMobile containerRef={containerRef} />
                </div>
                <div className="container-filters-footer-button-wrapper">
                  <SaveFiltersMobile onClick={closeFilters} />
                </div>
              </footer>
            </div>
            <section className="container-results">
              <header className="container-header container-options">
                <SortBy
                  className="container-option"
                  items={[
                    { label: "Sort by featured", value: "Rayban" },
                    {
                      label: "Price ascending",
                      value: "Rayban_price_asc",
                    },
                    {
                      label: "Price descending",
                      value: "Rayban_price_desc",
                    },
                  ]}
                />
                <HitsPerPage
                  className="container-option"
                  items={[
                    { label: "16 hits per page", value: 16, default: true },
                    { label: "32 hits per page", value: 32 },
                    // { label: "64 hits per page", value: 64 },
                  ]}
                />
              </header>
              <NoResultsBoundary fallback={<NoResults />}>
                <Hits hitComponent={Hit} />
              </NoResultsBoundary>
              <footer className="container-footer">
                <Pagination padding={2} showFirst={false} showLast={false} />
              </footer>
            </section>
          </main>
        </ScrollTo>
        <aside data-layout="mobile">
          <button
            className="filters-button"
            data-action="open-overlay"
            onClick={openFilters}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 14">
              <path
                d="M15 1H1l5.6 6.3v4.37L9.4 13V7.3z"
                stroke="#fff"
                strokeWidth="1.29"
                fill="none"
                fillRule="evenodd"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Filters
          </button>
        </aside>
      </InstantSearch>
    </div>
  );
}

function SubmitIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 18 18"
      aria-hidden="true"
    >
      <g
        fill="none"
        fillRule="evenodd"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.67"
        transform="translate(1 1)"
      >
        <circle cx="7.11" cy="7.11" r="7.11" />
        <path d="M16 16l-3.87-3.87" />
      </g>
    </svg>
  );
}

function Hit({ hit }) {
  const navigate = useNavigate();

  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    if (hit) {
      setLoading(false);
    }
  }, [hit]);

  const handleProduct = (id) => {
    navigate(`/product/${id}`);
  };

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <article className="hit" onClick={() => handleProduct(hit.id)}>
          <header className="hit-image-container">
            <img
              src={hit.featuredAsset.preview}
              alt={hit.name}
              className="hit-image"
            />
          </header>

          <div className="hit-info-container">
            <div className="hit-category">{hit.name}</div>

            <h1>
              <Highlight attribute="name" highlightedTagName="name" hit={hit} />
            </h1>
            <p className="hit-description">
              <Snippet
                attribute="description"
                highlightedTagName="mark"
                hit={hit}
              />
            </p>

            <footer>
              <p>
                <span className="hit-em">₹</span>{" "}
                <strong>{formatNumber(hit.variants[0].priceWithTax)}</strong>{" "}
                {/* <span className="hit-em hit-rating"> */}
                {/* <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="8"
                  height="8"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill="#e2a400"
                    fillRule="evenodd"
                    d="M10.472 5.008L16 5.816l-4 3.896.944 5.504L8 12.616l-4.944 2.6L4 9.712 0 5.816l5.528-.808L8 0z"
                  />
                </svg>{' '}
                {hit.rating} */}
                {/* </span> */}
              </p>
            </footer>
          </div>
        </article>
      )}
    </>
  );
}
