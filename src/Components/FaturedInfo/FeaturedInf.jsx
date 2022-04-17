import "./featuredInfo.css"
import {ArrowDownward, ArrowUpward} from "@mui/icons-material"
export default function FeaturedInf() {
  return (
    <div className="Featured">

    <div className="featuredIntime">
       <span className="featuredTitile">Revanue</span> 
       <div className="featuredMonyeContainer">
           <span className="featuredMonye">2$</span>
           <span className="featuredMonyeRate">-11.4 
           <ArrowDownward className="featuredIcon negative"/>
           </span>
       </div>
       <span className="faturedSub">Compared to Last month</span>
    </div>
    <div className="featuredIntime">
       <span className="featuredTitile">Sales</span> 
       <div className="featuredMonyeContainer">
           <span className="featuredMonye">$2.414</span>
           <span className="featuredMonyeRate">-11.4 
           <ArrowDownward className="featuredIcon negative"/>
           </span>
       </div>
       <span className="faturedSub">Compared to Last month</span>
    </div>
    <div className="featuredIntime">
       <span className="featuredTitile">Cost</span> 
       <div className="featuredMonyeContainer">
           <span className="featuredMonye">$2,255</span>
           <span className="featuredMonyeRate">
           +2.4 <ArrowUpward className="featuredIcon" />
           </span>
       </div>
       <span className="faturedSub">Compared to Last month</span>
    </div>
    </div>
  )
}
