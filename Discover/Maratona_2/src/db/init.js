const Database = require("./config");

const initDb = {
  async init() {
    const db = await Database();

    await db.exec(`
        CREATE TABLE user (
            iduser INTEGER PRIMARY KEY AUTOINCREMENT,
            name text not null UNIQUE,
            password varchar not null UNIQUE

        )
        `);

    await db.run(`
    INSERT INTO user (
        name,
        password
    ) VALUES (
            "Alberto",
            123456
    );
`);
    await db.exec(`
CREATE TABLE profile (
    idProfile INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    avatar TEXT,
    monthly_budget INT,
    days_per_week INT,
    hours_per_day INT,
    vacation_per_year INT,
    value_hour INT,
    id_user INT UNIQUE,
    FOREIGN KEY(id_user) REFERENCES user(iduser)
    )
`);

    await db.exec(`
CREATE TABLE jobs(
    idJob INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    daily_hours INT,
    total_hours INT,
    created_at DATETIME,
    id_user INT, 
    FOREIGN KEY(id_user) REFERENCES user(iduser)
)
`);

    await db.run(`

INSERT INTO profile(
    name,
    avatar,
    monthly_budget,
    days_per_week,
    hours_per_day,
    vacation_per_year,
    value_hour,
    id_user
) VALUES (
    "Alberto",
    "https://github.com/wayfiding.png",
    3000,
    5,
    5,
    4,
    75,
    1
);`);

    await db.run(`
INSERT INTO jobs (
    name,
    daily_hours,
    total_hours,
    created_at,
    id_user
) VALUES (
    "Pizzaria Guloso",
    2,
    1,
    1617514376018,
    1

);
`);

    await db.run(`
INSERT INTO jobs (
    name,
    daily_hours,
    total_hours,
    created_at,
    id_user
) VALUES (
    "OneTwo Projects",
    3,
    47,
    1617514376018,
    1
);
`);

    await db.close();
  },
};

initDb.init();
