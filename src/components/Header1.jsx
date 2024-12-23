import headerStyles from "./header.module.css";

const Header = () => {
  return (
    <div className={headerStyles.headercontainer}>
      <div className={headerStyles.header}>
        <div className={headerStyles.logo}>
          <img src="https://lemonpress.mn/logo/lemonpress.svg" alt="" />
          <nav>
            <div className={headerStyles.menu}>
              <div>Товхимол ▼</div>
              <div>Нийтлэлүүд ▼</div>
              <div>Цувралууд ▼</div>
              <div>Подкаст ▼</div>
              <div>Бидний тухай ▼</div>
            </div>
          </nav>
        </div>
        <div className={headerStyles.searchButton}>
          <i class="fa-solid fa-magnifying-glass"></i>
          <button>Уншаад үзье</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
