//CurrentPage
//
//

import 'package:flutter/material.dart';

class ChallengerController {
  final currentPageNotifier = ValueNotifier<int>(1);
  int get currentPage => currentPageNotifier.value;
  set currentPage(int value) => currentPageNotifier.value = value;

  int qtdAwserRight = 0;
}
