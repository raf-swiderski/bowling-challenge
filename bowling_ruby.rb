total_score = 0
frame = 1
bonus_rounds = 0


loop do
  pins_knocked_down = 0
  frame_score = 0
  puts "roll please (number)"
  roll_1 = gets.chomp
  roll_1 = roll_1.to_i
  pins_knocked_down += roll_1
  if roll_1 == 10
    puts "strike!"
    
    #adding total_score and number of bonus rounds for strike
    if bonus_rounds == 0
      total_score += 10
      frame_score = 10
      bonus_rounds += 2
    elsif bonus_rounds > 0
      total_score += 20
      frame_score = 20
      bonus_rounds += 1 
      # (two extra bonus, but minus 1 because of added bonus points in this roll)
    end
    
    #bonus points
  elsif roll_1 < 10
    # knocking down less than 10 on the first roll of the frame
    # so they roll again. 
    if bonus_rounds == 0
      total_score += roll_1
      frame_score += roll_1
    elsif bonus_rounds > 0
      # adding bonus for the first roll
      roll_bonus = roll_1 * 2
      total_score += roll_bonus
      frame_score += roll_bonus
      bonus_rounds -= 1
    end
    pins_left = 10 - roll_1
    puts "You scored #{roll_1.to_s} with a bonus of #{roll_1.to_s} \nThere are #{pins_left.to_s} pins left"
    puts "please roll a second time for this frame"

    roll_2 = gets.chomp
    roll_2 = roll_2.to_i
    pins_knocked_down += roll_2
    puts "Pins knocked down: #{pins_knocked_down}"

    if pins_knocked_down == 10 
      puts "spare!"
      if bonus_rounds == 0
        total_score += roll_2
        frame_score += roll_2
        bonus_rounds += 1
      elsif bonus_rounds > 0
        roll_bonus = roll_2 * 2
        total_score += roll_bonus
        frame_score += roll_bonus
        bonus_rounds += 1
      end

    elsif pins_knocked_down < 10
      
      if bonus_rounds == 0
        total_score += roll_2
        frame_score += roll_2
      elsif bonus_rounds > 0 
        roll_bonus = roll_2 * 2
        total_score += roll_bonus
        frame_score += roll_bonus
        bonus_rounds -= 1
      end

    end
  
  end

  puts "This is the end of frame #{frame.to_s} of 10"
  puts "The number of bonus rounds left is #{bonus_rounds}"
  puts "Your score for this frame is #{frame_score.to_s}!"
  puts "Your total score is #{total_score.to_s}."
  frame += 1
  break if frame == 11
end