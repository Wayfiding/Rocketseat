import 'dart:convert';

class AwnserModel {
  final String title;
  final bool isRigth;

  AwnserModel({
    required this.title,
    this.isRigth = false,
  });

  Map<String, dynamic> toMap() {
    return {
      'title': title,
      'isRigth': isRigth,
    };
  }

  factory AwnserModel.fromMap(Map<String, dynamic> map) {
    return AwnserModel(
      title: map['title'],
      isRigth: map['isRigth'] ?? false,
    );
  }

  String toJson() => json.encode(toMap());

  factory AwnserModel.fromJson(String source) =>
      AwnserModel.fromMap(json.decode(source));
}
