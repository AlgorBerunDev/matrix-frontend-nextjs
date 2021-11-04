import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { Button, Drawer, Row, Col } from "antd";
import useBreakpoint from "antd/lib/grid/hooks/useBreakpoint";
import {
  INavigationResponse,
  useGetNavigationsQuery,
} from "../../features/navigations/index";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { isOpenMenu, closeMenu } from "../../features/menu";
import Icon, {
  FacebookFilled,
  HomeFilled,
  HomeOutlined,
  InstagramFilled,
  PhoneFilled,
  PhoneOutlined,
} from "@ant-design/icons";

export const Navigation = () => {
  const router = useRouter();
  const screen = useBreakpoint();
  const [visibleSmallNavigation, setVisibleSmallNavigation] = useState(false);
  const { data = [], isLoading } = useGetNavigationsQuery(0);
  const dispatch = useAppDispatch();
  const isOpen = useAppSelector(isOpenMenu);

  const [activeCategoryId, setActiveCategoryId] = useState<number>(
    data.length > 0 ? data[0].id : 0
  );
  const [categoryItems, setCategoryItems] = useState<INavigationResponse[]>([]);

  useEffect(() => {
    if (data.length > 0) {
      const resultActiveCategory: any = data.find(
        (element) => element.id === activeCategoryId
      );
      setCategoryItems(resultActiveCategory?.children);
    }
  }, [activeCategoryId]);

  const handleClickCategory = (categoryId: any) => {
    setActiveCategoryId(categoryId);
    openSmallNavigation();
  };

  const openSmallNavigation = () => {
    if (!screen.md) {
      setVisibleSmallNavigation(true);
    }
  };
  const closeSmallNavigation = () => {
    setVisibleSmallNavigation(false);
  };
  useEffect(() => {
    if (isOpen) {
      closeSmallNavigation();
    }
  }, [isOpen]);
  useEffect(() => {
    dispatch(closeMenu());
  }, [router]);
  return (
    <>
      <Drawer
        title="Для вашего объекта"
        placement="right"
        closable={false}
        visible={isOpen}
        getContainer={false}
        width={"100%"}
        style={{ position: "absolute"}}
      >
        <div className="social-links">
          <Link href={"/"}>
            <div className="social-link">
              <HomeFilled />
            </div>
          </Link>
          <Link href={"/facebook"}>
            <div className="social-link">
              <FacebookFilled />
            </div>
          </Link>
          <Link href={"/instagram"}>
            <div className="social-link">
              <InstagramFilled />
            </div>
          </Link>
          <Link href={"/telegram"}>
            <div className="social-link">
              <Icon
                component={() => (
                  <img
                    style={{ width: 24, transform: "translateY(-6px)" }}
                    src="/icons/telegram-48.png"
                  />
                )}
              />
            </div>
          </Link>
        </div>
        <div
          className="phone"
        >
          <Button
            type="link"
            href="tel:+998909022262"
            size="large"
            style={{ margin: "0 auto", backgroundColor: "#eaa83c" }}
          >
            <span style={{ color: "black" }}>+998909022262</span>
          </Button>
        </div>
        <div className="const-links">
          <Link href={"/contact_us"}>
            <div className="const-link">Обратная связь</div>
          </Link>
          <Link href={"/about_us"}>
            <div className="const-link">О нас</div>
          </Link>
        </div>
        <Row gutter={[3, 0]}>
          <Col xs={24} sm={24} md={5} className="categories">
            {data.map((item) => {
              return (
                <div
                  onClick={() => handleClickCategory(item.id)}
                  className={
                    activeCategoryId === item.id
                      ? "category category-active"
                      : "category"
                  }
                  key={item.id}
                >
                  {" "}
                  {item.title}
                </div>
              );
            })}
          </Col>
          <Col xs={0} sm={0} md={16}>
            <div className="category-items">
              <Row gutter={[5, 40]}>
                {categoryItems?.map((item) => {
                  return (
                    <Col span={8} key={item.id}>
                      <div style={{ paddingLeft: 10, height: "100%" }}>
                        <h2 style={{ color: "#eaa83c" }}>{item.title}</h2>
                        {item.children.map((sub_item) => {
                          return (
                            <div className="category-item" key={sub_item.id}>
                              <Button type="link" href={sub_item.path}>
                                {sub_item.title}
                              </Button>
                            </div>
                          );
                        })}
                      </div>
                    </Col>
                  );
                })}
              </Row>
            </div>
          </Col>
        </Row>
      </Drawer>
      <Drawer
        getContainer={false}
        width={"90%"}
        height={"70%"}
        visible={isOpen ? visibleSmallNavigation : false}
        onClose={closeSmallNavigation}
        placement="left"
        closable={false}
        style={{ position: "absolute" }}
      >
        <div style={{ height: 70 }}></div>
        <Row gutter={[5, 40]}>
          {categoryItems?.map((item) => {
            return (
              <Col span={24} key={item.id}>
                <div style={{ paddingLeft: 10, height: "100%" }}>
                  <h2
                    className="subcategory-header"
                    style={{ color: "#eaa83c" }}
                  >
                    {item.title}
                  </h2>
                  {item.children.map((sub_item) => {
                    return (
                      <div className="category-item" key={sub_item.id}>
                        <Link href={sub_item.path}>
                          <div style={{ color: "white" }}>{sub_item.title}</div>
                        </Link>
                      </div>
                    );
                  })}
                </div>
              </Col>
            );
          })}
        </Row>
      </Drawer>
      <style jsx>{`
        .ant-btn.ant-btn-primary.btn-hover:hover {
          background-color: white;
        }
        .category {
          padding: 12px 16px;
          font-size: 1.2rem;
          cursor: pointer;
          color: #eaa83c;
        }
        .category-active,
        .category.category-active:hover {
          color: #eaa83c;
        }
        .category:hover {
          
        }
        .subcategory-item {
          color: #eaa83c;
        }
        .category-items {
          min-height: 500px;
          box-sizing: border-box;
          padding: 20px;
          color: #eaa83c;
        }

        .const-links,
        .social-links {
          display: none;
        }
        .phone {
          display: none;
        }
        @media screen and (max-width: 576px) {
          .phone {
            display: flex;
            justify-content: center;
          }
          .category-items {
            width: 0;
            height: 0;
            display: none;
            overflow: hidden;
          }
          .close-small-menu {
            font-size: 2em;
          }
          .social-links {
            width: 100%;
            display: flex;
            justify-content: center;
          }
          .social-link {
            font-size: 1.5em;
            margin: 6px;
          }
          .const-links {
            display: block;
          }
          .const-link {
            padding: 12px 16px;
            font-size: 1.2rem;
            cursor: pointer;
            color: #eaa83c;
          }
        }
      `}</style>
    </>
  );
};
