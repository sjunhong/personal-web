import react from 'react';
import styled from 'styled-components';

function Skills() {
  const languages = {
    proficient: [
      {
        name: 'TypeScript',
        src: 'https://img.shields.io/static/v1?style=flat-square&label=&message=TypeScript&color=007acc&labelColor=212121&logoColor=007acc&logo=typescript',
      },
      {
        name: 'JavaScript',
        src: 'https://img.shields.io/static/v1?style=flat-square&label=&message=JavaScript&color=f7df1e&labelColor=212121&logoColor=f7df1e&logo=javascript',
      },
      {
        name: 'Python',
        src: 'https://img.shields.io/static/v1?style=flat-square&label=&message=Python&color=3776ab&labelColor=212121&logoColor=3776ab&logo=python',
      },
    ],
    intermediate: [
      {
        name: 'Java',
        src: 'https://img.shields.io/static/v1?style=flat-square&label=&message=Java&color=007396&labelColor=e0e0e0&logoColor=007396&logo=java',
      },
      {
        name: 'C++',
        src: 'https://img.shields.io/static/v1?style=flat-square&label=&message=C%2B%2B&color=00599c&labelColor=e0e0e0&logoColor=00599c&logo=c%2B%2B',
      },
    ],
  };
  const libAndFrameworks = [
    {
      name: 'React.js',
      src: 'https://img.shields.io/badge/-ReactJs-61DAFB?logo=react&logoColor=white&style=for-the-badge',
    },
    {
      name: 'Node.js',
      src: 'https://img.shields.io/static/v1?style=flat-square&label=&message=Node.js&color=393&labelColor=212121&logoColor=393&logo=node-dot-js',
    },
    {
      name: 'Express',
      src: 'https://img.shields.io/static/v1?style=flat-square&label=&message=Express&color=000&labelColor=e0e0e0&logoColor=000&logo=express',
    },
    {
      name: 'Flask',
      src: 'https://img.shields.io/static/v1?style=flat-square&label=&message=Flask&color=000&labelColor=e0e0e0&logoColor=000&logo=flask',
    },
    {
      name: 'FastAPI',
      src: 'https://img.shields.io/static/v1?style=flat-square&label=&message=FastAPI&color=009688&labelColor=e0e0e0&logoColor=000&logo=FastAPI',
    },
  ];

  const dataAndML = {
    data: [
      {
        name: 'MySQL',
        src: 'https://img.shields.io/static/v1?style=flat-square&label=&message=MySQL&color=4479A1&labelColor=e0e0e0&logoColor=4479A1&logo=MySQL',
      },
      {
        name: 'PostgresSQL',
        src: 'https://img.shields.io/static/v1?style=flat-square&label=&message=PostgreSQL&color=336791&labelColor=e0e0e0&logoColor=336791&logo=postgresql',
      },
    ],
    machineLearning: [
      {
        name: 'pandas',
        src: 'https://img.shields.io/static/v1?style=flat-square&label=&message=Pandas&color=150458&labelColor=e0e0e0&logoColor=150458&logo=pandas',
      },
      {
        name: 'scikit-learn',
        src: 'https://img.shields.io/static/v1?style=flat-square&label=&message=scikit-learn&color=f7931e&labelColor=212121&logoColor=f7931e&logo=scikit-learn',
      },
    ],
  };
  const devOpsAndTools = {
    devOps: [
      {
        name: 'Docker',
        src: 'https://img.shields.io/static/v1?style=flat-square&label=&message=Docker&color=2496ed&labelColor=212121&logoColor=2496ed&logo=docker',
      },
      {
        name: 'AWS',
        src: 'https://img.shields.io/static/v1?style=flat-square&label=&message=AWS&color=232f3e&labelColor=e0e0e0&logoColor=232f3e&logo=amazon-aws',
      },
      {
        name: 'AWS S3',
        src: 'https://img.shields.io/static/v1?style=flat-square&label=&message=AWS&color=569A31&labelColor=e0e0e0&logoColor=569A31&logo=amazon-s3',
      },
      {
        name: 'AWS DynamoDB',
        src: 'https://img.shields.io/static/v1?style=flat-square&label=&message=AWS&color=4053D6&labelColor=e0e0e0&logoColor=4053D6&logo=amazon-dynamodb',
      },
      {
        name: 'GCP',
        src: 'https://img.shields.io/static/v1?style=flat-square&label=&message=GCP&color=4285f4&labelColor=212121&logoColor=4285f4&logo=google-cloud',
      },
      {
        name: 'GitHub Actions',
        src: 'https://img.shields.io/static/v1?style=flat-square&label=&message=GCP&color=2088FF&labelColor=212121&logoColor=2088FF&logo=github-actions',
      },
    ],
    tools: [
      {
        name: 'Git',
        src: 'https://img.shields.io/static/v1?style=flat-square&label=&message=Git&color=f05032&labelColor=212121&logoColor=f05032&logo=git',
      },
      {
        name: 'GitHub',
        src: 'https://img.shields.io/static/v1?style=flat-square&label=&message=GitHub&color=181717&labelColor=e0e0e0&logoColor=181717&logo=github',
      },
    ],
  };

  return (
    <Wrapper>
      <h2>Skills</h2>
      <h6>Programming Languages</h6>

      <h6>Libraries & Frameworks</h6>
      <h6>Data & ML</h6>
      <h6>DevOps & Tools</h6>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  height: 100%;
  justify-content: start;
  border: 2px solid green;

  h2 {
    text-align: center;
  }

  li {
    list-style: none;
  }

  ul {
    padding-left: 20px;
    text-align: left;
  }
`;

export default Skills;
