import React from 'react';
import ReactLoading from 'react-loading';
import { makeStyles } from '@material-ui/core';
import {
  Section, Title, Article, Prop, list
} from './generic';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.default,
    display: 'flex',
    height: '100vh',
    overflow: 'hidden',
    width: '100vw',
    paddingTop: '20px',
  },
  wrapper: {
    display: 'flex',
    flex: '1 1 auto',
    overflow: 'hidden',
    paddingTop: 64
  },
  contentContainer: {
    display: 'flex',
    flex: '1 1 auto',
    overflow: 'hidden'
  },
  content: {
    flex: '1 1 auto',
    height: '100%',
    overflow: 'auto'
  }
}));

const Example = () => (
  <Section>
    <Title>React Loading</Title>
    {list.map((l) => (
      <Article key={l.prop}>
        <ReactLoading type={l.prop} color="#fff" />
        <Prop>{l.name}</Prop>
      </Article>
    ))}
  </Section>
);

export const Spin = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Section>
        <Article key="spin">
          <ReactLoading type="spin" color="#fff" />
          <Prop>Loading...</Prop>
        </Article>
      </Section>
    </div>
  );
};

export default Example;
