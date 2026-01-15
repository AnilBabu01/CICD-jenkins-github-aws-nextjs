pipeline {
    agent any

    environment {
        APP_DIR = "/var/www/nextjs-app"
    }

    stages {

        stage('Clean Workspace') {
            steps {
                echo 'Cleaning Jenkins Workspace'
                deleteDir()
            }
        }

        stage('Clone Repo') {
            steps {
                echo 'Cloning the repo'
                git branch: 'main',
                    url: 'https://github.com/AnilBabu01/CICD-jenkins-github-aws-nextjs'
            }
        }

        stage('Deploy to EC2') {
            steps {
                echo 'Deploying to EC2'
                sh '''
                    sudo mkdir -p $APP_DIR
                    sudo chown -R jenkins:jenkins $APP_DIR

                    rsync -av --delete \
                      --exclude='.git' \
                      --exclude='node_modules' \
                      ./ $APP_DIR

                    cd $APP_DIR
                    npm install
                    npm run build

                    sudo fuser -k 3000/tcp || true
                    nohup npm run start > app.log 2>&1 &
                '''
            }
        }
    }

    post {
        success {
            echo '✅ Deployment successful'
        }
        failure {
            echo '❌ Deployment failed'
        }
    }
}
