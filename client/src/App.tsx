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

// Blog Cluster 3: Market Ready (Pillar + 9 Satellites)
import MarketReadyPillar from './pages/blog/why-market-ready-is-the-only-way-to-sell-in-todays-las-vegas-market';
import ConcessionsMath from './pages/blog/concessions-cost-more-than-repairs-the-math-every-las-vegas-seller-needs-to-see';
import BuyerPsychology from './pages/blog/what-buyers-actually-see-when-they-walk-into-your-home';
import HouseSmell from './pages/blog/your-house-might-smell-how-odors-kill-home-sales-las-vegas';
import UpdatesROI from './pages/blog/which-home-updates-pay-off-when-selling-las-vegas';
import CantAffordRepairs from './pages/blog/cant-afford-to-make-home-market-ready-options-las-vegas';
import HoldingCosts from './pages/blog/holding-costs-unsold-home-las-vegas';
import DaysOnMarket from './pages/blog/las-vegas-homes-55-days-on-market-what-it-means';
import FixerUpperMyth from './pages/blog/someone-will-buy-it-as-is-lies-sellers-tell-themselves';
import NotWorthIt from './pages/blog/when-making-home-market-ready-isnt-worth-it-las-vegas';

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
      
      {/* Blog Cluster 3: Market Ready */}
      <Route path={"/blog/why-market-ready-is-the-only-way-to-sell-in-todays-las-vegas-market"} component={MarketReadyPillar} />
      <Route path={"/blog/concessions-cost-more-than-repairs-the-math-every-las-vegas-seller-needs-to-see"} component={ConcessionsMath} />
      <Route path={"/blog/what-buyers-actually-see-when-they-walk-into-your-home"} component={BuyerPsychology} />
      <Route path={"/blog/your-house-might-smell-how-odors-kill-home-sales-las-vegas"} component={HouseSmell} />
      <Route path={"/blog/which-home-updates-pay-off-when-selling-las-vegas"} component={UpdatesROI} />
      <Route path={"/blog/cant-afford-to-make-home-market-ready-options-las-vegas"} component={CantAffordRepairs} />
      <Route path={"/blog/holding-costs-unsold-home-las-vegas"} component={HoldingCosts} />
      <Route path={"/blog/las-vegas-homes-55-days-on-market-what-it-means"} component={DaysOnMarket} />
      <Route path={"/blog/someone-will-buy-it-as-is-lies-sellers-tell-themselves"} component={FixerUpperMyth} />
      <Route path={"/blog/when-making-home-market-ready-isnt-worth-it-las-vegas"} component={NotWorthIt} />
      
      {/* Duplicate routes for /app/blog/* - used by static OG file redirects from social media */}
      <Route path={"/app/blog/sell-house-fast-las-vegas-the-ultimate-guide-to-all-your-options"} component={SellHouseFastLasVegas} />
      <Route path={"/app/blog/how-to-stop-foreclosure-in-las-vegas-a-step-by-step-guide"} component={HowToStopForeclosure} />
      <Route path={"/app/blog/cash-home-buyers-in-las-vegas-are-they-legit"} component={CashHomeBuyers} />
      <Route path={"/app/blog/selling-an-inherited-property-in-las-vegas-the-complete-guide"} component={SellingInheritedProperty} />
      <Route path={"/app/blog/creative-real-estate-solutions-beyond-the-cash-offer"} component={CreativeRealEstateSolutions} />
      <Route path={"/app/blog/las-vegas-housing-market-2025-what-every-seller-needs-to-know-right-now"} component={LasVegasHousingMarket2025} />
      <Route path={"/app/blog/why-70-percent-of-homes-are-sitting-unsold-the-stale-listing-crisis"} component={StaleListingCrisis} />
      <Route path={"/app/blog/is-your-home-overpriced-how-to-know-when-to-adjust"} component={IsYourHomeOverpriced} />
      <Route path={"/app/blog/when-your-listing-goes-stale-why-your-home-isnt-selling-and-your-other-options"} component={WhenListingGoesStale} />
      <Route path={"/app/blog/hidden-costs-stale-listing"} component={HiddenCostsStaleListing} />
      <Route path={"/app/blog/why-market-ready-is-the-only-way-to-sell-in-todays-las-vegas-market"} component={MarketReadyPillar} />
      <Route path={"/app/blog/concessions-cost-more-than-repairs-the-math-every-las-vegas-seller-needs-to-see"} component={ConcessionsMath} />
      <Route path={"/app/blog/what-buyers-actually-see-when-they-walk-into-your-home"} component={BuyerPsychology} />
      <Route path={"/app/blog/your-house-might-smell-how-odors-kill-home-sales-las-vegas"} component={HouseSmell} />
      <Route path={"/app/blog/which-home-updates-pay-off-when-selling-las-vegas"} component={UpdatesROI} />
      <Route path={"/app/blog/cant-afford-to-make-home-market-ready-options-las-vegas"} component={CantAffordRepairs} />
      <Route path={"/app/blog/holding-costs-unsold-home-las-vegas"} component={HoldingCosts} />
      <Route path={"/app/blog/las-vegas-homes-55-days-on-market-what-it-means"} component={DaysOnMarket} />
      <Route path={"/app/blog/someone-will-buy-it-as-is-lies-sellers-tell-themselves"} component={FixerUpperMyth} />
      <Route path={"/app/blog/when-making-home-market-ready-isnt-worth-it-las-vegas"} component={NotWorthIt} />
      
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
