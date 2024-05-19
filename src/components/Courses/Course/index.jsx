import React, { useEffect, useState } from "react";
import {
  Container,
  Lesson,
  LessonList,
  MainContent,
  SectionTitle,
  Sidebar,
  VideoFrame,
  VideoPlayer,
} from "./style";

import { useParams } from "react-router-dom";
import useRequest from "../../../hooks/useRequest";
export default function Course() {
  const { userId } = useParams();
  const [data, setData] = useState();

  const { request } = useRequest();
  const [activeLesson, setActiveLesson] = React.useState(
    JSON.parse(sessionStorage.getItem("activeLesson"))
  );

  useEffect(() => {
    const getCourse = async () => {
      const info = await request({ url: `course/${userId}` });
      setData(info);
    };
    getCourse();
    // eslint-disable-next-line
  }, []);

  return (
    <Container>
      <MainContent>
        <VideoPlayer>
          <VideoFrame src={activeLesson?.video_url} controls muted autoPlay />
        </VideoPlayer>
        <h1>{activeLesson?.title}</h1>
        <span>{activeLesson?.sub_title}</span>
      </MainContent>
      <Sidebar>
        {data?.sections?.map((section) => (
          <div key={section._id}>
            <SectionTitle>{section.title}</SectionTitle>

            <LessonList>
              {section.lessons.map((lesson, index) => (
                <Lesson
                  key={lesson._id}
                  isActive={activeLesson?._id === lesson?._id}
                  onClick={() => {
                    sessionStorage.setItem(
                      "activeLesson",
                      JSON.stringify(lesson)
                    );
                    setActiveLesson(lesson);
                  }}
                >
                  {index + 1} - Lesson
                </Lesson>
              ))}
            </LessonList>
          </div>
        ))}
      </Sidebar>
    </Container>
  );
}
