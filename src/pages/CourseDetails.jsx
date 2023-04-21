import React from "react";
import { useParams } from "react-router-dom";
import { SpecialCard } from "../components";
import AvatarDescription from "../components/AvatarDescription/AvatarDescription";
import { events } from "../store/workshop";

const CourseDetails = () => {
  const {id} = useParams();
  const workshop = events.find(w => w.id === id);

  return (
    <>
      <section id="course-details" className="course-details" style={{marginTop: '60px'}}>
        <div className="container" data-aos="fade-up">
          <div className="row">
            <div className="col-lg-8">
              <img src={workshop.image} className="img-fluid" alt="" />
              <h3>{workshop.title}</h3>
              <p>{workshop.description}</p>
            </div>
            <div className="col-lg-4">
              <SpecialCard />
            </div>
          </div>
          <CourseWorkNative courseWork={workshop.courseWork}/>
          <AvatarDescription />
        </div>
      </section>
    </>
  );
};

const CourseWorkNative = ({courseWork}) => {
  return (
    <>
    <div style={{margin: '30px 0px 5px 0px'}} className="comments">
    <h4 className="comments-count">Course Work</h4>
    {
      Object.values(courseWork).map((chapter, index) => {
        return (
          <>
          <section id="cource-details-tabs" key={"chapter_"+index} className="cource-details-tabs" style={{paddingBottom: '20px'}}>
            <div className="container">
              <div className="row">
                <div className="col-lg-9 mt-4 mt-lg-0">
                  <div className="tab-content">
                    <TabPane key={"chapter_tabpane_"+index} tabPane={chapter} />
                  </div>
                </div>
              </div>
            </div>
          </section>
          </>
        )
      })
    }
    </div>
    </>
  )
}

// const CourseWork = ({courseWork}) => {
//     const [chapter, setChapter] = useState(Object.keys(courseWork)[0]);
//     return (
//         <>
//         <section id="cource-details-tabs" className="cource-details-tabs" style={{paddingBottom: '20px'}}>
//         <div className="container" data-aos="fade-up">
//           <div className="row">
//             {/* <div className="col-lg-3">
//               <ul className="nav nav-tabs flex-column">
//                 {Object.keys(courseWork).map((chapter, index) => {
//                     return (<li key={'chapter_title_'+index} className="nav-item" onClick={() => setChapter(chapter)}>
//                     <a className="nav-link" data-bs-toggle="tab" href="#tab-5">
//                       {chapter}
//                     </a>
//                   </li>)
//                 })}
//               </ul>
//             </div> */}
//             <div className="col-lg-9 mt-4 mt-lg-0">
//               <div className="tab-content">
//                 <TabPane tabPane={courseWork[chapter]} />
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//         </>
//     )
// };

const TabPane = ({ tabPane }) => {
  const { title, description, image } = tabPane;
  return (
    <>
      <div className="tab-pane active show" id="tab-1">
        <div className="row">
          <div className="col-lg-8 details order-2 order-lg-1">
            <h5>{title}</h5>
            <p className="fst-italic">{description}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CourseDetails;
