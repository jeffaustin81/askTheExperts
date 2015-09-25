questionsAnswers.controller('AnswersCtrl', function AnswersCtrl($scope, $stateParams, QuestionsFactory, UtilitiesFactory) {
  $scope.question = UtilitiesFactory.findById(QuestionsFactory.questions, $stateParams.questionId)
  $scope.addAnswer = function() {
    $scope.question.answers.push({ name: $scope.answerName, id: $scope.question.answers.length + 1, votes: 0 });
    $scope.answerName = null;

    $scope.answer = UtilitiesFactory.findById(QuestionsFactory.questions.answers, $stateParams.answerId)
  };

    $scope.upVote = function($scope) {
        // console.log($scope);
        // console.log($scope.answer);
        // $scope.answer = UtilitiesFactory.findById(QuestionsFactory.questions.answers, $stateParams.)

    $scope.votes += 1;
  };

  $scope.downVote = function($scope) {
      // console.log($scope);
      // console.log($scope.answer);
      // $scope.answer = UtilitiesFactory.findById(QuestionsFactory.questions.answers, $stateParams.)

  $scope.votes -= 1;
};
});

  // var answer = { votes: 0 };
  // $scope.addAnswer = function() {
  //   answer.name = $scope.answerName;
  //   $scope.question.answers.push(answer);
  //   $scope.answerName = null;
  // };
  //   $scope.upVote = function() {
  //   answer.votes += 1;
  // };
