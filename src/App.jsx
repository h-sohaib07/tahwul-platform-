import { Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'
import Dashboard from './pages/Dashboard'
import DetailsOverview from './pages/DetailsOverview'
import DetailsEvidence from './pages/DetailsEvidence'

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/perspectives/:id" element={<DetailsOverview />} />
        <Route path="/perspectives/:id/evidence" element={<DetailsEvidence />} />
      </Routes>
    </Layout>
  )
}

export default App
