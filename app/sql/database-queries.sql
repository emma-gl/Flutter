-- Table: public.users

-- DROP TABLE IF EXISTS public.users;

CREATE TABLE IF NOT EXISTS public.users
(
    id integer NOT NULL DEFAULT 'nextval('users_id_seq'::regclass)',
    first_name character varying(100) COLLATE pg_catalog."default" NOT NULL,
    last_name character varying(100) COLLATE pg_catalog."default" NOT NULL,
    city character varying(255) COLLATE pg_catalog."default" NOT NULL,
    phone character varying(255) COLLATE pg_catalog."default" NOT NULL,
    gender character varying(255) COLLATE pg_catalog."default" NOT NULL,
    orientation character varying(255) COLLATE pg_catalog."default" NOT NULL,
    email character varying(255) COLLATE pg_catalog."default" NOT NULL,
    date_of_birth date NOT NULL,
    CONSTRAINT users_pkey PRIMARY KEY (id)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.users
    OWNER to admin;

-- Table: public.swipes

-- Query to create swipes table
CREATE TABLE IF NOT EXISTS public.swipes 
(
	swipe_id INT GENERATED ALWAYS AS IDENTITY,
	id INT,
	swipe_yes INT NULL,
	swipe_no INT NULL,
	PRIMARY KEY(swipe_id),
	CONSTRAINT fk_user_id
		FOREIGN KEY(id)
			REFERENCES users(id)
);

