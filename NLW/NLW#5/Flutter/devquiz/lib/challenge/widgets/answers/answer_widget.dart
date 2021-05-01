import 'package:DevQuiz/core/app_colors.dart';
import 'package:DevQuiz/core/app_text_styles.dart';
import 'package:DevQuiz/shared/models/awnser_model.dart';
import 'package:flutter/material.dart';

class AnswerWidget extends StatelessWidget {
  final AwnserModel awnsers;
  final bool isSelected;
  final VoidCallback onTap;
  final bool disabled;

  const AnswerWidget({
    Key? key,
    required this.awnsers,
    required this.onTap,
    this.isSelected = false,
    this.disabled = false,
  }) : super(key: key);
  Color get _selectedColorRight =>
      awnsers.isRigth ? AppColors.darkGreen : AppColors.darkRed;

  Color get _selectedBorderRight =>
      awnsers.isRigth ? AppColors.lightGreen : AppColors.lightRed;

  Color get _selectedColorCardRight =>
      awnsers.isRigth ? AppColors.lightGreen : AppColors.lightRed;

  Color get _selectedBorderCardRight =>
      awnsers.isRigth ? AppColors.green : AppColors.red;

  TextStyle get _selectedTextStyleRight =>
      awnsers.isRigth ? AppTextStyles.bodyDarkGreen : AppTextStyles.bodyDarkRed;

  IconData get _selectedIconRight =>
      awnsers.isRigth ? Icons.check : Icons.close;

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.symmetric(horizontal: 16.0, vertical: 4),
      child: IgnorePointer(
        ignoring: disabled,
        child: GestureDetector(
          onTap: onTap,
          child: Container(
              padding: const EdgeInsets.all(16),
              decoration: BoxDecoration(
                color: AppColors.white,
                borderRadius: BorderRadius.circular(10),
                border: Border.fromBorderSide(
                  BorderSide(
                      color: isSelected
                          ? _selectedBorderCardRight
                          : AppColors.border),
                ),
              ),
              child: Row(
                mainAxisAlignment: MainAxisAlignment.spaceBetween,
                children: [
                  Expanded(
                    child: Text(awnsers.title,
                        style: isSelected
                            ? _selectedTextStyleRight
                            : AppTextStyles.body),
                  ),
                  Container(
                      width: 24,
                      height: 24,
                      decoration: BoxDecoration(
                          color: isSelected
                              ? _selectedColorRight
                              : AppColors.white,
                          borderRadius: BorderRadius.circular(500),
                          border: Border.fromBorderSide(BorderSide(
                              color: isSelected
                                  ? _selectedBorderRight
                                  : AppColors.border))),
                      child: isSelected
                          ? Icon(
                              _selectedIconRight,
                              size: 16,
                              color: Colors.white,
                            )
                          : null)
                ],
              )),
        ),
      ),
    );
  }
}
