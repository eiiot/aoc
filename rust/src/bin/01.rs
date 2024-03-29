type Input = Vec<u32>;

fn parse (input: &str) -> Input {
    input.split("\n\n")
      .map(|group| group.lines()
                    .filter_map(| calorie_count | calorie_count.parse::<u32>().ok())
                    .sum()
      )
      .collect()
}

pub fn part_one(input: &str) -> Option<u32> {
  parse(input)
    .iter()
    .max()
    .copied()
}

pub fn part_two(input: &str) -> Option<u32> {
  let mut parsed = parse(input);
  
  parsed.sort_by(|a, b| b.cmp(a));

  let first_three = parsed
    .iter()
    .take(3);

  Some(first_three.sum::<u32>())
}

fn main() {
    let input = &advent_of_code::read_file("inputs", 1);
    advent_of_code::solve!(1, part_one, input);
    advent_of_code::solve!(2, part_two, input);
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_part_one() {
        let input = advent_of_code::read_file("examples", 1);
        assert_eq!(part_one(&input), Some(24000));
    }

    #[test]
    fn test_part_two() {
        let input = advent_of_code::read_file("examples", 1);
        assert_eq!(part_two(&input), Some(45000));
    }
}
