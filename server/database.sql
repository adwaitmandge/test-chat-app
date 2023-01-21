CREATE TABLE users(
    id UUID DEFAULT uuid_generate_v4() NOT NULL PRIMARY KEY,
    username VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    registration_id VARCHAR(255) NOT NULL,
    role VARCHAR(255) NOT NULL,
    thesis_id UUID,
    education VARCHAR(255) NOT NULL,
    field_of_interest VARCHAR(255) NOT NULL,
    time_of_registration VARCHAR(255) NOT NULL,
    is_avatar_set BOOLEAN NOT NULL,
    avatar_image VARCHAR(255)
);

CREATE TABLE thesis(
    id UUID DEFAULT uuid_generate_v4() NOT NULL PRIMARY KEY,
    contributors_id UUID ,
    research_area VARCHAR(100) NOT NULL,
    isCompleted BOOLEAN NOT NULL,
    goal_id UUID,
    topic VARCHAR(255) NOT NULL,
    user_id UUID NOT NULL
);

CREATE TABLE contributors(
    id UUID DEFAULT uuid_generate_v4() NOT NULL PRIMARY KEY,
    user_id UUID NOT NULL,
    isMentor BOOLEAN NOT NULL,
    thesis_id UUID NOT NULL
);

CREATE TABLE goals(
    id UUID DEFAULT uuid_generate_v4() NOT NULL PRIMARY KEY,
    isCompleted BOOLEAN NOT NULL,
    deadline VARCHAR(100),
    task VARCHAR(255) NOT NULL,
    alloted_by VARCHAR(255) NOT NULL,
    feedback VARCHAR(255) NOT NULL,
    thesis_id UUID NOT NULL
);

INSERT INTO goals(iscompleted, deadline, task, alloted_by, feedback, thesis_id) values(false, '19:12', 'Finishing touches', 'professor', 'Pathetic', '4262c737-84ef-43b6-9cb1-2999adc98373');

INSERT INTO thesis(contributors_id, research_area, iscompleted, topic, user_id) values('6801e3e4-fc7f-465b-9635-fa6c635ffa08', 'Thermodynamics', false, 'Heat', 'ff85e5ea-2cb3-47d4-836e-16f29dab2007');

update goals set thesis_id='86943e4d-ea32-4ee6-9fd0-ef2579328cd1' where iscompleted=f;

select 