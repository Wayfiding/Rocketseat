import 'package:DevQuiz/challenge/widgets/answers/answer_widget.dart';
import 'package:DevQuiz/core/app_text_styles.dart';
import 'package:DevQuiz/shared/models/awnser_model.dart';
import 'package:DevQuiz/shared/models/question_model.dart';
import 'package:flutter/material.dart';

class QuizWidget extends StatefulWidget {
  final QuestionModel question;
  final ValueChanged<bool> onSelected;
  const QuizWidget({Key? key, required this.question, required this.onSelected})
      : super(key: key);

  @override
  _QuizWidgetState createState() => _QuizWidgetState();
}

class _QuizWidgetState extends State<QuizWidget> {
  int indexSelected = -1;
  AwnserModel awnsers(int index) => widget.question.awnsers[index];

  @override
  Widget build(BuildContext context) {
    return Container(
      child: Container(
        child: Column(
          children: [
            SizedBox(
              height: 64,
            ),
            Text(
              widget.question.title,
              style: AppTextStyles.heading,
            ),
            SizedBox(
              height: 24,
            ),
            for (var i = 0; i < widget.question.awnsers.length; i++)
              AnswerWidget(
                awnsers: awnsers(i),
                disabled: indexSelected != -1,
                isSelected: indexSelected == i,
                onTap: (value) {
                  indexSelected = i;

                  setState(() {});
                  Future.delayed(Duration(seconds: 1))
                      .then((_) => widget.onSelected(value));
                },
              ),
          ],
        ),
      ),
    );
  }
}
