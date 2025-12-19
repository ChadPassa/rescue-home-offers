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

// Blog Cluster 1: Sell House Fast Las Vegas
import SellHouseFastLasVegas from './pages/blog/sell-house-fast-las-vegas-the-ultimate-guide-to-all-your-options';
import HowToStopForeclosure from './pages/blog/how-to-stop-foreclosure-in-las-vegas-a-step-by-step-guide';
import CashHomeBuyers from './pages/blog/cash-home-buyers-in-las-vegas-are-they-legit';
import SellingInheritedProperty from './pages/blog/selling-an-inherited-property-in-las-vegas-the-complete-guide';
import CreativeRealEstateSolutions from './pages/blog/creative-real-estate-solutions-beyond-the-cash-offer';

// Blog Cluster 2: Market Conditions & Stale Listings
import LasVegasHousingMarket2025 from './pages/blog/las-vegas-housing-market-2025-what-every-seller-needs-to-know-right-now';
import StaleListingCrisis from './pages/blog/why-70-percent-of-homes-are-sitting-unsold-the-stale-listing-crisis';
import IsYourHomeOverpriced from './pages/blog/is-your-home-overpriced-how-to-know-when-to-adjust';
import WhenListingGoesStale from './pages/blog/when-your-listing-goes-stale-why-your-home-isnt-selling-and-your-other-options';
import HiddenCostsStaleListing from './pages/blog/hidden-costs-stale-listing';

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
      
      {/* Blog Cluster 1: Sell House Fast Las Vegas */}
      <Route path={"/blog/sell-house-fast-las-vegas-the-ultimate-guide-to-all-your-options"} component={SellHouseFastLasVegas} />
      <Route path={"/blog/how-to-stop-foreclosure-in-las-vegas-a-step-by-step-guide"} component={HowToStopForeclosure} />
      <Route path={"/blog/cash-home-buyers-in-las-vegas-are-they-legit"} component={CashHomeBuyers} />
      <Route path={"/blog/selling-an-inherited-property-in-las-vegas-the-complete-guide"} component={SellingInheritedProperty} />
      <Route path={"/blog/creative-real-estate-solutions-beyond-the-cash-offer"} component={CreativeRealEstateSolutions} />
      
      {/* Blog Cluster 2: Market Conditions & Stale Listings */}
      <Route path={"/blog/las-vegas-housing-market-2025-what-every-seller-needs-to-know-right-now"} component={LasVegasHousingMarket2025} />
      <Route path={"/blog/why-70-percent-of-homes-are-sitting-unsold-the-stale-listing-crisis"} component={StaleListingCrisis} />
      <Route path={"/blog/is-your-home-overpriced-how-to-know-when-to-adjust"} component={IsYourHomeOverpriced} />
      <Route path={"/blog/when-your-listing-goes-stale-why-your-home-isnt-selling-and-your-other-options"} component={WhenListingGoesStale} />
      <Route path={"/blog/hidden-costs-stale-listing"} component={HiddenCostsStaleListing} />
      
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
