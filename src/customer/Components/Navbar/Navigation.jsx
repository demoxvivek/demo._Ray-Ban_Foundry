import React, { Fragment, useEffect, useState } from "react";
import { Dialog, Popover, Transition } from "@headlessui/react";
import SearchIcon from "@mui/icons-material/Search";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import PersonIcon from "@mui/icons-material/Person";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Avatar, Button, Menu, MenuItem, Slide } from "@mui/material";
import { navigation } from "../../../config/navigationMenu";
import { useDispatch, useSelector } from "react-redux";
import { grey } from "@mui/material/colors";
import "../dropdown/dropdown.css";
import { logoutCustomer } from "../../../action/Customer";
import { getCartItems } from "../../../action/cart";
import DropDown from "./DropDown";
import MenuOpen from "./MenuOpen";
import CustomAccordion from "./CustomAccordian";
import ShoppingCart, { EmptyCart } from "./ShoppingCartModel";
import { Toaster } from "react-hot-toast";
export default function Navigation() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { auth, cart, newUser, cartItems } = useSelector((store) => store);
  const [openAuthModal, setOpenAuthModal] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const openUserMenu = Boolean(anchorEl);
  const jwt = localStorage.getItem("jwt");
  const location = useLocation();
  const [showDropdown, setShowDropdown] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [menuItemsData, setmenuItemsData] = useState(null);
  const [selectedPage, setSelectedPage] = useState(null);
  const [openCart, setOpenCart] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false); // Add state for scroll

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handlePageClick = (pageName) => {
    setSelectedPage(pageName === selectedPage ? null : pageName);
  };
  const Sunglasses = {
    sidebarData: {
      shop: ["Men", "Women", "Kids", "All Sunglasses"],
      giftCard: [
        "New Arrivals",
        "Best Sellers",
        "Reverse",
        "Scuderia Ferrari",
        "Chromance",
        "Polarized ❤️",
        "Titanium",
      ],
    },
    mainContentData: [
      {
        name: "Aviator",
        img: "https://india.ray-ban.com/media/catalog/product/cache/ecdbd5a50e6b93b224fc4aacce3c4ac7/0/r/0rx7235_8063_6.png",
      },
      {
        name: "Wayfarer",
        img: "https://india.ray-ban.com/media/catalog/product/cache/ecdbd5a50e6b93b224fc4aacce3c4ac7/0/r/0rx7236i_6750_6.png",
      },
      {
        name: "Erika",
        img: "https://india.ray-ban.com/media/catalog/product/cache/ecdbd5a50e6b93b224fc4aacce3c4ac7/0/r/0rx7236i_8368_6.png",
      },
      {
        name: "Round",
        img: "https://india.ray-ban.com/media/catalog/product/cache/ecdbd5a50e6b93b224fc4aacce3c4ac7/0/r/0rx7237i_5754_6.png",
      },
      {
        name: "New Wayfarer",
        img: "https://india.ray-ban.com/media/catalog/product/cache/ecdbd5a50e6b93b224fc4aacce3c4ac7/0/r/0rx7237i_8335_6.png",
      },
      {
        name: "I-shape",
        img: "https://india.ray-ban.com/media/catalog/product/cache/ecdbd5a50e6b93b224fc4aacce3c4ac7/0/r/0rx7239_2012_6.png",
      },
      {
        name: "Justin",
        img: "https://india.ray-ban.com/media/catalog/product/cache/ecdbd5a50e6b93b224fc4aacce3c4ac7/0/r/0rx8789_1244_6.png",
      },
      {
        name: "Clubmaster",
        img: "https://india.ray-ban.com/media/catalog/product/cache/ecdbd5a50e6b93b224fc4aacce3c4ac7/0/r/0rx8789_1246_6.png",
      },
    ],
  };

  const Eyeglasses = {
    sidebarData: {
      shop: ["Men", "Women", "Kids", "All Eyeglasses"],
      giftCard: ["New Arrivals", "Best Sellers", "Scuderia Ferrari"],
      frameStyle: ["Full Rim", "Half Rim"],
    },
    mainContentData: [
      {
        name: "Aviator Optics",
        img: "https://india.ray-ban.com/media/catalog/product/cache/ecdbd5a50e6b93b224fc4aacce3c4ac7/0/r/0rx7237i_8335_6.png",
      },
      {
        name: "Hexagonal Optics",
        img: "https://india.ray-ban.com/media/catalog/product/cache/ecdbd5a50e6b93b224fc4aacce3c4ac7/0/r/0rx7239_2012_6.png",
      },
      {
        name: "State Street Optics",
        img: "https://india.ray-ban.com/media/catalog/product/cache/ecdbd5a50e6b93b224fc4aacce3c4ac7/0/r/0rx8789_1244_6.png",
      },
      {
        name: "Club Maste Optics",
        img: "https://india.ray-ban.com/media/catalog/product/cache/ecdbd5a50e6b93b224fc4aacce3c4ac7/0/r/0rx8789_1246_6.png",
      },
      {
        name: "Timeless RX 5228",
        img: "https://india.ray-ban.com/media/catalog/product/cache/ecdbd5a50e6b93b224fc4aacce3c4ac7/0/r/0rx8789_1246_6.png",
      },
    ],
  };

  // Event handlers for user menu
  const handleUserClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseUserMenu = (event) => {
    setAnchorEl(null);
  };

  // Event handlers for authentication modal
  const handleOpen = () => {
    setOpenAuthModal(true);
  };
  const handleClose = () => {
    setOpenAuthModal(false);
  };

  // Navigation handler for category clicks
  const handleCategoryClick = (category, section, item, close) => {
    navigate(`/${category.id}/${section.id}/${item.id}`);
    close();
  };

  // Effect to close auth modal on new user registration and handle navigation restrictions
  useEffect(() => {
    if (newUser?.newUser?.user) {
      handleClose();
    }
    if (
      auth.user?.role !== "ADMIN" &&
      (location.pathname === "/sign-in" || location.pathname === "/sing-up")
    ) {
      navigate(-1);
    }
  }, [auth.user]);

  // Logout handler
  const handleLogout = () => {
    handleCloseUserMenu();
    dispatch(logoutCustomer());
  };
  const handleOpenCart = () => {
    setOpenCart(true);
  };
  const handleCloseCart = () => {
    setOpenCart(false);
  };
  // Navigate to user's orders
  const handleMyOrderClick = () => {
    handleCloseUserMenu();
    navigate("/account/order");
  };

  return (
    <div className="bg-white pb-4 z-999 mb-10">
      {/* Mobile menu */}
      <Toaster />
      <Transition.Root show={open} as={Fragment}>
        <Dialog
          as="div"
          className="relative flex w-full max-w-md flex-col overflow-y-auto bg-white pb-12 shadow-xl"
          onClose={setOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 z-40 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl">
                <div className="flex px-4 pb-2 pt-5">
                  <button
                    type="button"
                    className="-m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
                    onClick={() => setOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>

                {/* Mobile menu navigation */}
                <CustomAccordion
                  sunglasses={Sunglasses}
                  eyeGlasses={Eyeglasses}
                />
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>

      <header
        className={`fixed top-0 w-full bg-white ${
          isScrolled
            ? "backdrop-blur-md bg-opacity-70 shadow-md"
            : "bg-opacity-100"
        } transition-all duration-300 z-50`}
      >
        {/* Top navigation bar */}
        <nav
          aria-label="Top"
          className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
        >
          <div
            className="border-b border-gray-200"
            // style={{ backgroundColor: "white" }}
          >
            <div className="flex h-16 items-center px-11">
              {/* Mobile menu button */}
              <button
                type="button"
                className="rounded-md bg-white p-2 text-gray-400 lg:hidden"
                onClick={() => {
                  setOpen(true);
                  setIsOpen(true);
                }}
              >
                <span className="sr-only">Open menu</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </button>

              {/* Logo */}
              <div className="ml-4 flex lg:ml-0">
                <Link to="/">
                  <img
                    src="https://india.ray-ban.com/static/version1715928826/frontend/Aceturtle/Rayban_new/en_US/images/logo.svg"
                    alt="Shopwithzosh"
                    className="h-20 w-auto"
                    style={{ marginTop: 10, height: 100, width: 110 }}
                  />
                </Link>
              </div>

              <Popover.Group className="hidden w-1/2  lg:ml-8 lg:block lg:self-stretch z-10 relative">
                <div className="flex   h-full space-x-8">
                  {navigation.pages.map((page) => (
                    <a
                      key={page.name}
                      href={page.href}
                      className="flex  items-center text-sm font-medium text-black hover:text-blue-800"
                      style={{ color: page.name === "PROMO" ? "red" : "black" }}
                      onMouseEnter={() => {
                        if (page.name === "SUNGLASSES") {
                          setmenuItemsData(() => Sunglasses);
                        } else if (page.name === "EYEGLASSES") {
                          setmenuItemsData(() => Eyeglasses);
                        } else {
                          // Reset menuItemsData if it's not SUNGLASSES or EYEGLASSES
                          setmenuItemsData(null); // or setmenuItemsData({})
                        }
                        // Update showDropdown based on whether menuItemsData is set
                        setShowDropdown(
                          page.name === "SUNGLASSES" ||
                            page.name === "EYEGLASSES"
                        );
                      }}
                      onMouseLeave={() =>
                        setShowDropdown(
                          page.name === "SUNGLASSES" ||
                            page.name === "EYEGLASSES"
                        )
                      }
                    >
                      {page.name}
                    </a>
                  ))}
                  {/* Show dropdown if page name is "sunGlasses" or "eyeglasses" */}

                  {showDropdown && menuItemsData && (
                    <div
                      onMouseLeave={() => setShowDropdown(false)}
                      className="absolute top-10 right-30% w-[50vw] h-[50vh] border-1 border-red-500"
                      style={{ zIndex: 1000 }}
                    >
                      {/* Log menuItemsData to verify its contents */}
                      {/* {console.log("menuItemsData", menuItemsData)} */}

                      <DropDown
                        data={menuItemsData}
                        showDropdown={showDropdown}
                      />
                    </div>
                  )}
                </div>
              </Popover.Group>

              <div className="ml-auto flex items-center">
                {/* User authentication and menu */}
                <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                  {newUser?.newUser?.user ? (
                    <div>
                      <Avatar
                        className="text-black"
                        onClick={handleUserClick}
                        aria-controls={open ? "basic-menu" : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? "true" : undefined}
                        sx={{
                          bgcolor: grey[900],
                          color: "white",
                          cursor: "pointer",
                        }}
                      >
                        {newUser?.newUser?.user?.name[0].toUpperCase()}
                      </Avatar>
                      <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={openUserMenu}
                        onClose={handleCloseUserMenu}
                        MenuListProps={{
                          "aria-labelledby": "basic-button",
                        }}
                      >
                        <MenuItem onClick={handleCloseUserMenu}>
                          Profile
                        </MenuItem>
                        <MenuItem onClick={handleMyOrderClick}>
                          My Orders
                        </MenuItem>
                        <MenuItem onClick={handleLogout}>Logout</MenuItem>
                      </Menu>
                    </div>
                  ) : (
                    <>
                      <Button
                        onClick={handleOpen}
                        className=" relative text-sm font-medium text-black hover:text-gray-900"
                        style={{ color: "#000000" }}
                      >
                        <PersonIcon className="h-6 w-6" />
                        {/* <img src="image-3.svg" alt="person" /> */}
                      </Button>
                      {openAuthModal && (
                        <div className="absolute  top-16 right-55 z-10">
                          {" "}
                          <MenuOpen handleClose={handleClose} />
                        </div>
                      )}
                    </>
                  )}
                </div>

                {/* Search button */}
                <div className="flex lg:ml-6">
                  <p className="p-2 text-black hover:text-gray-500">
                    <span className="sr-only">Search</span>
                    <SearchIcon
                      // <MagnifyingGlassIcon
                      className="h-6 w-6"
                      aria-hidden="true"
                      onClick={() => {
                        navigate("/search");
                      }}
                    />
                  </p>
                </div>
                {/* WishList button */}
                <div className="flex lg:ml-6">
                  <p className="p-2 text-black hover:text-gray-500">
                    <span className="sr-only">wishlist</span>
                    <FavoriteIcon
                      onClick={() => {
                        navigate("/shops");
                      }}
                    />
                  </p>
                </div>
                <CartButton newUser={newUser} cartItems={cartItems} />
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}

const CartButton = ({ newUser, cartItems }) => {
  const [openCart, setOpenCart] = useState(false);
  const dispatch = useDispatch();
  const jwt = localStorage.getItem("jwt");
  const handleOpenCart = () => setOpenCart(!openCart);
  const handleCloseCart = () => setOpenCart(false);
  const authUser = useSelector((store) => store?.auth?.user?.user);

  useEffect(() => {
    dispatch(getCartItems());
  }, [dispatch, jwt]);
  return (
    <div className="ml-4 flow-root lg:ml-6">
      <Button
        onClick={handleOpenCart}
        className="group -m-2 flex items-center p-2"
      >
        <div className="relative">
          <ShoppingBagIcon
            className="h-6 w-6 flex-shrink-0 text-black group-hover:text-gray-500"
            aria-label="Shopping Bag"
          />
          <span className="absolute -top-2 -right-1 text-black rounded-lg ml-2 text-sm font-medium group-hover:text-gray-500">
            {cartItems?.cartItems?.data && authUser
              ? cartItems.cartItems?.data.activeOrder?.lines.length
              : 0}
          </span>
          <span className="sr-only">items in cart, view bag</span>
        </div>
      </Button>
      <Slide direction="left" in={openCart} mountOnEnter unmountOnExit>
        <div className="absolute top-16 right-20 z-10">
          {authUser &&
            (cartItems?.cartItems?.data?.addItemToOrder?.totalQuantity === 0 ? (
              <EmptyCart handleCloseCart={handleCloseCart} />
            ) : (
              <ShoppingCart handleCloseCart={handleCloseCart} />
            ))}
        </div>
      </Slide>
    </div>
  );
};
