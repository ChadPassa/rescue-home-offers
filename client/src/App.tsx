import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import Solutions from "./pages/Solutions";
import FAQ from "./pages/FAQ";
import Blog from "./pages/Blog";
import About from "./pages/About";
import SingleMotherStory from "./pages/stories/SingleMotherStory";
import CasinoWorkerStory from "./pages/stories/CasinoWorkerStory";
import NeighborhoodStory from "./pages/stories/NeighborhoodStory";

// New blog cluster imports
import SellHouseFastLasVegas from './pages/blog/sell-house-fast-las-vegas-the-ultimate-guide-to-all-your-options';
import HowToStopForeclosure from './pages/blog/how-to-stop-foreclosure-in-las-vegas-a-step-by-step-guide';
import CashHomeBuyers from './pages/blog/cash-home-buyers-in-las-vegas-are-they-legit';
import SellingInheritedProperty from './pages/blog/selling-an-inherited-property-in-las-vegas-the-complete-guide';
import CreativeRealEstateSolutions from './pages/blog/creative-real-estate-solutions-beyond-the-cash-offer';

function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/solutions"} component={Solutions} />
      <Route path={"/faq"} component={FAQ} />
      <Route path={"/blog"} component={Blog} />
      <Route path={"/about"} component={About} />
      <Route path={"/stories/single-mother"} component={SingleMotherStory} />
      <Route path={"/stories/casino-worker"} component={CasinoWorkerStory} />
      <Route path={"/stories/neighborhood-transformation"} component={NeighborhoodStory} />
      
      {/* New blog cluster routes */}
      <Route path={"/blog/sell-house-fast-las-vegas-the-ultimate-guide-to-all-your-options"} component={SellHouseFastLasVegas} />
      <Route path={"/blog/how-to-stop-foreclosure-in-las-vegas-a-step-by-step-guide"} component={HowToStopForeclosure} />
      <Route path={"/blog/cash-home-buyers-in-las-vegas-are-they-legit"} component={CashHomeBuyers} />
      <Route path={"/blog/selling-an-inherited-property-in-las-vegas-the-complete-guide"} component={SellingInheritedProperty} />
      <Route path={"/blog/creative-real-estate-solutions-beyond-the-cash-offer"} component={CreativeRealEstateSolutions} />
      
      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

// NOTE: About Theme
// - First choose a default theme according to your design style (dark or light bg), than change color palette in index.css
//   to keep consistent foreground/background color across components
// - If you want to make theme switchable, pass `switchable` ThemeProvider and use `useTheme` hook

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="light"
        // switchable
      >
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
