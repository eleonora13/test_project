pipeline {
  agent any

  tools {nodejs “node”}

  stages {
    stage(‘Execution’) {
      steps {
        sh ‘npm test’
      }
    }
  }
}