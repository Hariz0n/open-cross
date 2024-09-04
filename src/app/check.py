import json
def check_function(e, ans):
  # Здесь необходимо вставить верные ответы
  answers = {
    "row": ["11111", "2222", "333"],
    "column": ["12342", "12345"]
  }

  # Код проверки
  response = json.loads(ans)
  state = json.loads(response["state"])
  
  input_list = []
  
  for i in range(len(state['row'])):
    rowValue = state['row'][i]
    rowAnswerValue = answers['row'][i]
    
    if (rowValue == rowAnswerValue):
      input_list.append({
        'ok': True
      })
    else:
      input_list.append({
        'ok': False,
        # 'msg': f"${i + 1} ответ в ряд неверный"
      })
      
  for i in range(len(state['column'])):
    columnValue = state['column'][i]
    columnAnswerValue = answers['column'][i]
    
    if (columnValue == columnAnswerValue):
      input_list.append({
        'ok': True
      })
    else:
      input_list.append({
        'ok': False,
        # 'msg': f"{i + 1} ответ в столбец неверный"
      })

  correctCount = len(list(filter(lambda a: a['ok'], input_list)))
  totalCount = len(input_list)

  return {
    'ok': True if correctCount == totalCount else False if correctCount == 0 else 'Partial',
    'grade_decimal': correctCount / totalCount,
    'input_list': list(filter(lambda a: not a['ok'], input_list))
  }
  
print(check_function('','{"state":"{\\"row\\":[\\"11111\\",\\"2222\\",\\"333\\"],\\"column\\":[\\"12342\\",\\"1234\\"]}"}'))