import Welcome from './components/Welcome';
import Navigation from './components/Navigation';
import About from './components/About';
import TechSkills from './components/TechSkills';
import WorkExp from './components/WorkExp';
import Hobbies from './components/Hobbies';
import Photos from './components/Photos';
import Language from './components/Language';
import Projects from './components/Projects';
import Layout from './components/Layout';

function App() {
  return (
    <Layout>
      <Welcome/>
      <Navigation/>
      <About/>
      <TechSkills/>
      <WorkExp/>
      <Hobbies/>
      <Photos/>
      <Language/>
      <Projects/>
    </Layout>
  );
}

export default App;
