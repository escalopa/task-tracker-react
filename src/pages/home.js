import React, {useState} from 'react'

import AuthorizeComponent from 'components/AuthorizeComponent'
import useAuthUser from 'global/AuthUser'

import ProjectsCardsWrapper from 'components/entity/projects/ProjectsWrapper'
import ProjectCreateForm from 'components/entity/projects/ProjectCreateForm'
import ProjectCard from 'components/entity/projects/ProjectCard'
import ProjectModalCard from 'components/entity/projects/ProjectModalCard'
import TaskExpandCard from 'components/entity/tasks/TaskExpandCard'

function Home() {
  const {user} = useAuthUser()
  const [currentOpenProject, setCurrentOpenProject] = useState(undefined)
  const [currentOpenTask, setCurrentOpenTask] = useState(undefined)

  function showProject(project) {
    setCurrentOpenProject(project)
  }

  function showTask(task) {
    setCurrentOpenTask(task)
  }

  return (
    <>
      <ProjectsCardsWrapper>
        {user?.projects?.map((project) => (
          <ProjectCard
            key={project.id}
            id={project.id}
            name={project.name}
            tasks={project.tasks}
            onTaskShowClick={showTask}
            onProjectShowClick={() => showProject(project)}
          />
        ))}
        <ProjectCreateForm />
      </ProjectsCardsWrapper>
      {currentOpenProject && (
        <ProjectModalCard
          project={currentOpenProject}
          onCloseModalClick={setCurrentOpenProject}
        ></ProjectModalCard>
      )}
      {currentOpenTask && (
        <TaskExpandCard
          task={currentOpenTask}
          onCloseModalClick={setCurrentOpenTask}
        ></TaskExpandCard>
      )}
    </>
  )
}

export default AuthorizeComponent(Home, false, '/login')
